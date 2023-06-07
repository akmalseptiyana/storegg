import { cn } from "@/utils/classnames";
import Star from "@/assets/star.svg";

type RatingProps = {
  value: number;
  className?: string;
};

export function StarRating({ value, className }: RatingProps) {
  const stars = [];
  for (let index = 0; index < value; index++) {
    stars.push(
      <li key={index}>
        <Star width="24px" height="22px" />
      </li>
    );
  }

  return <ul className={cn("flex gap-x-1", className)}>{stars}</ul>;
}
