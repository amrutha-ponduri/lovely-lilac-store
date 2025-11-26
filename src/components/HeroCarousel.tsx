import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroBanners } from "@/data/mockData";
import { cn } from "@/lib/utils";

export const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroBanners.map((banner, index) => (
          <div key={banner.id} className="w-full h-full shrink-0 relative">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/80 via-purple-dark/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative h-full container mx-auto px-4 flex items-center">
              <div
                className={cn(
                  "max-w-xl text-primary-foreground transition-all duration-700 delay-200",
                  currentSlide === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
              >
                <span className="inline-block bg-accent/90 text-accent-foreground px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {banner.subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  {banner.title}
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                  {banner.description}
                </p>
                <Link to={banner.link}>
                  <Button
                    size="lg"
                    className="bg-card text-primary hover:bg-card/90 rounded-full px-8 font-semibold text-lg hover-scale"
                  >
                    {banner.cta}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 flex items-center justify-center transition-all"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm text-primary-foreground hover:bg-card/40 flex items-center justify-center transition-all"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {heroBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "w-8 bg-card"
                : "w-2 bg-card/50 hover:bg-card/70"
            )}
          />
        ))}
      </div>
    </div>
  );
};
