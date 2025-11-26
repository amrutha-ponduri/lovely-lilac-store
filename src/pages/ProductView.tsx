import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCarousel } from "@/components/ProductCarousel";
import { ReviewTile } from "@/components/ReviewTile";
import { Button } from "@/components/ui/button";
import { products, reviews } from "@/data/mockData";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { Heart, Star, Minus, Plus, ChevronLeft, ChevronRight, Truck, Shield, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const ProductView = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  if (!product) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <p className="text-muted-foreground">Product not found</p>
        </div>
      </MainLayout>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const inCart = isInCart(product.id);
  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    toast.success("Added to cart!");
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate("/cart");
  };

  const handleWishlist = () => {
    toggleWishlist(product);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-secondary">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  {product.discount}% OFF
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "shrink-0 w-20 h-24 rounded-lg overflow-hidden border-2 transition-all",
                      selectedImage === index
                        ? "border-primary shadow-md"
                        : "border-transparent opacity-60 hover:opacity-100"
                    )}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title & Rating */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-green-500/10 text-green-600 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-foreground">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice > product.price && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-lg font-semibold text-accent">
                    {product.discount}% off
                  </span>
                </>
              )}
              <button
                onClick={handleWishlist}
                className={cn(
                  "ml-auto w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                  isWishlisted
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border hover:border-accent hover:text-accent"
                )}
              >
                <Heart className={cn("w-6 h-6", isWishlisted && "fill-current")} />
              </button>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "px-4 py-2 rounded-full border-2 text-sm font-medium transition-all",
                        selectedColor === color
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes.length > 0 && product.sizes[0] !== "One Size" && (
              <div>
                <h3 className="font-semibold text-foreground mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={cn(
                        "w-12 h-12 rounded-lg border-2 font-medium transition-all",
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/50"
                      )}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-foreground mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="flex-1 h-14 rounded-xl text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Add to Cart
              </Button>
              <Button
                onClick={handleBuyNow}
                disabled={!inCart && quantity === 0}
                className="flex-1 h-14 rounded-xl bg-gradient-primary hover:opacity-90 text-primary-foreground text-lg font-semibold"
              >
                Buy Now
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Free Delivery</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                  <RotateCcw className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Easy Returns</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-secondary flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Genuine Product</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">Customer Reviews</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                Based on {product.reviewCount} reviews
              </span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review) => (
              <ReviewTile key={review.id} review={review} />
            ))}
          </div>

          {reviews.length > 3 && (
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllReviews(!showAllReviews)}
                className="rounded-full px-8"
              >
                {showAllReviews ? "Show Less" : "Load More Reviews"}
              </Button>
            </div>
          )}
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <ProductCarousel
            title="You May Also Like"
            subtitle="Similar products you might love"
            products={relatedProducts}
            className="mt-16"
          />
        )}
      </div>
    </MainLayout>
  );
};

export default ProductView;
