import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";
import { ProductCard } from "@/components/ProductCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { products, categories } from "@/data/mockData";
import { SlidersHorizontal, Grid, LayoutGrid, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [sortBy, setSortBy] = useState("popular");
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<string>("all");

  const category = categories.find((c) => c.id === categoryId);
  
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((p) => p.category === categoryId);
    
    // Price filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((p) => {
        if (max) return p.price >= min && p.price <= max;
        return p.price >= min;
      });
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
    }

    return filtered;
  }, [categoryId, sortBy, priceRange]);

  return (
    <MainLayout>
      {/* Hero Banner */}
      <div className="h-[300px] md:h-[400px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${category?.image || "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&h=800&fit=crop"})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/80 via-purple-dark/50 to-transparent" />
        </div>
        <div className="relative h-full container mx-auto px-4 flex items-center">
          <div className="text-primary-foreground">
            <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
              {filteredProducts.length} Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {category?.name || "Category"}
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-md">
              Explore our curated collection of {category?.name?.toLowerCase() || "products"}
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Sorting */}
      <div className="sticky top-16 lg:top-20 z-40 bg-card/95 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-full gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </Button>
              
              <div className="hidden md:flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Price:</span>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[140px] rounded-full border-border">
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-999">Under ₹999</SelectItem>
                    <SelectItem value="1000-2499">₹1,000 - ₹2,499</SelectItem>
                    <SelectItem value="2500-4999">₹2,500 - ₹4,999</SelectItem>
                    <SelectItem value="5000">₹5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {/* Grid Toggle - Desktop Only */}
              <div className="hidden lg:flex items-center gap-1 bg-secondary rounded-full p-1">
                <button
                  onClick={() => setGridCols(2)}
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    gridCols === 2 ? "bg-card shadow-sm" : "hover:bg-card/50"
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(3)}
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    gridCols === 3 ? "bg-card shadow-sm" : "hover:bg-card/50"
                  )}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    gridCols === 4 ? "bg-card shadow-sm" : "hover:bg-card/50"
                  )}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[160px] rounded-full border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="discount">Best Discount</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Mobile Price Filter */}
          {showFilters && (
            <div className="md:hidden mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Price:</span>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="flex-1 rounded-full border-border">
                    <SelectValue placeholder="All Prices" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="0-999">Under ₹999</SelectItem>
                    <SelectItem value="1000-2499">₹1,000 - ₹2,499</SelectItem>
                    <SelectItem value="2500-4999">₹2,500 - ₹4,999</SelectItem>
                    <SelectItem value="5000">₹5,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-8">
        {filteredProducts.length > 0 ? (
          <div
            className={cn(
              "grid gap-4 md:gap-6",
              gridCols === 2 && "grid-cols-2",
              gridCols === 3 && "grid-cols-2 lg:grid-cols-3",
              gridCols === 4 && "grid-cols-2 lg:grid-cols-4"
            )}
          >
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center">
              <SlidersHorizontal className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default Category;
