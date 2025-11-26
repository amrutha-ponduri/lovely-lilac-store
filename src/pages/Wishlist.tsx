import { Link } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/ProductCard";
import { useWishlist } from "@/contexts/WishlistContext";
import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const Wishlist = () => {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <MainLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <div className="w-24 h-24 rounded-full bg-rose-light flex items-center justify-center mb-6">
            <Heart className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-8 text-center max-w-md">
            Save items you love by clicking the heart icon on any product.
          </p>
          <Link to="/">
            <Button className="rounded-full px-8 h-12 bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold">
              Explore Products
            </Button>
          </Link>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">My Wishlist</h1>
          <p className="text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"} saved
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {items.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Wishlist;
