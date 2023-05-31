import { cn } from "@/utils/classnames";
import { StarIcon } from "./ui/icons/star-icon";

type RatingProps = {
  value: number;
  className?: string;
};

export function StarRating({ value, className }: RatingProps) {
  const stars = [];
  for (let index = 0; index < value; index++) {
    stars.push(
      <li key={index}>
        <StarIcon className="h-[22px] w-6" />
      </li>
    );
  }

  return <ul className={cn("flex gap-x-1", className)}>{stars}</ul>;
}
