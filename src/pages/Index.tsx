import { MainLayout } from "@/components/layout/MainLayout";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { ProductCarousel } from "@/components/ProductCarousel";
import { products } from "@/data/mockData";
import { Sparkles, Truck, Shield, Gift } from "lucide-react";

const Index = () => {
  // Shuffle products for different sections
  const forYouProducts = [...products].sort(() => Math.random() - 0.5);
  const topSellingProducts = [...products].sort((a, b) => b.reviewCount - a.reviewCount);
  const trendingProducts = [...products].sort((a, b) => b.discount - a.discount);

  return (
    <MainLayout>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Features Bar */}
      <section className="py-6 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On orders over ₹999</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Secure Payment</p>
                <p className="text-xs text-muted-foreground">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Gift className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Easy Returns</p>
                <p className="text-xs text-muted-foreground">30 days return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">Exclusive Deals</p>
                <p className="text-xs text-muted-foreground">Members only offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Carousel */}
      <CategoryCarousel />

      {/* Products For You */}
      <ProductCarousel
        title="Picked Just For You"
        subtitle="Handpicked recommendations based on trending styles"
        products={forYouProducts}
        className="bg-card"
      />

      {/* Banner Section */}
      <section className="py-12 bg-gradient-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left text-primary-foreground">
              <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get 40% Off on New Arrivals
              </h2>
              <p className="text-primary-foreground/80 mb-6 max-w-md">
                Refresh your wardrobe with our latest collection. Use code BLOOM40 at checkout.
              </p>
              <button className="bg-card text-primary hover:bg-card/90 rounded-full px-8 py-3 font-semibold transition-all hover-scale">
                Shop New Arrivals
              </button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=500&h=400&fit=crop"
                alt="New Arrivals"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-xl shadow-lg">
                40% OFF
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling Products */}
      <ProductCarousel
        title="Top Selling This Week"
        subtitle="Most loved products by our customers"
        products={topSellingProducts}
      />

      {/* Trending Products */}
      <ProductCarousel
        title="Catch Up With The Trend"
        subtitle="Stay ahead with the latest fashion trends"
        products={trendingProducts}
        className="bg-secondary/30"
      />

      {/* Instagram Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              #BloomStyle
            </h2>
            <p className="text-muted-foreground">
              Share your style with us on Instagram
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=300&h=300&fit=crop",
              "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop",
            ].map((img, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={img}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
