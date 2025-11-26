import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Men", href: "/category/men" },
  { name: "Women", href: "/category/women" },
  { name: "Kids", href: "/category/kids" },
  { name: "Accessories", href: "/category/accessories" },
  { name: "Beauty", href: "/category/beauty" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <span className="text-primary-foreground font-bold text-xl">B</span>
            </div>
            <span className="hidden sm:block text-2xl font-bold text-gradient">Bloom</span>
          </Link>

          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search for products, brands and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 h-12 rounded-full bg-secondary border-0 focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/70"
              />
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/wishlist" className="relative">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                <Heart className="w-5 h-5" />
                {wishlistItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {wishlistItems.length}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart" className="relative">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-secondary">
                <ShoppingBag className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-medium">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden pb-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 h-11 rounded-full bg-secondary border-0"
            />
          </div>
        </form>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 py-3 border-t border-border/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="relative text-sm font-medium text-foreground/80 hover:text-primary transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-80 py-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            <div className="border-t border-border my-2" />
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-foreground/80 hover:bg-secondary hover:text-primary transition-colors font-medium"
            >
              Login / Signup
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
