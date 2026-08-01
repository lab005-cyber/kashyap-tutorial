import { FiStar } from "react-icons/fi";

export default function StarRating({
  rating,
  size = 16,
}: {
  rating: number;
  size?: number;
}) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar
          key={i}
          style={{ width: size, height: size }}
          className={`${
            i < rating ? "fill-accent text-accent" : "text-grey-300"
          }`}
        />
      ))}
    </div>
  );
}
