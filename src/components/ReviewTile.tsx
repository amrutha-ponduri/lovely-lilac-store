import { Star, ThumbsUp } from "lucide-react";
import { Review } from "@/data/mockData";
import { cn } from "@/lib/utils";

interface ReviewTileProps {
  review: Review;
  className?: string;
}

export const ReviewTile = ({ review, className }: ReviewTileProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div
      className={cn(
        "bg-card rounded-xl p-5 border border-border hover:shadow-soft transition-shadow",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <img
          src={review.avatar}
          alt={review.userName}
          className="w-12 h-12 rounded-full object-cover border-2 border-purple-soft"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{review.userName}</h4>
          <p className="text-sm text-muted-foreground">{formatDate(review.date)}</p>
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 bg-green-500 text-white px-2.5 py-1 rounded-full">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span className="text-sm font-medium">{review.rating}</span>
        </div>
      </div>

      {/* Comment */}
      <p className="text-foreground/80 mb-4 leading-relaxed">{review.comment}</p>

      {/* Footer */}
      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
          <ThumbsUp className="w-4 h-4" />
          <span>Helpful ({review.helpful})</span>
        </button>
      </div>
    </div>
  );
};
