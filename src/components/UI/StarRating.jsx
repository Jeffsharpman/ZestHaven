import { Star } from "lucide-react";

function StarRating({ count = 5, className = "" }) {
  return (
    <div className={`flex gap-1 text-gold ${className}`} aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export default StarRating;
