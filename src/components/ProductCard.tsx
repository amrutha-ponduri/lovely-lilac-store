import { Link } from "react-router-dom";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/mockData";
import { useWishlist } from "@/contexts/WishlistContext";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
    toast.success(isWishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success("Added to cart!");
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className={cn(
        "group block bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover-lift",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Discount Badge */}
        {product.discount > 0 && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {product.discount}% OFF
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={cn(
            "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300",
            isWishlisted
              ? "bg-accent text-accent-foreground"
              : "bg-card/80 backdrop-blur-sm text-foreground hover:bg-accent hover:text-accent-foreground"
          )}
        >
          <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
        </button>

        {/* Quick Add Button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-card text-foreground hover:bg-primary hover:text-primary-foreground rounded-full font-medium"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-1 bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
            <Star className="w-3 h-3 fill-current" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">₹{product.price.toLocaleString()}</span>
          {product.originalPrice > product.price && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-xs font-semibold text-accent">
                ({product.discount}% off)
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};
