import { cn } from "@/utils/classnames";

type Props = {
  className?: string;
  orientation: "horizontal" | "vertical";
};

export function Divider({ className, orientation }: Props) {
  return (
    <div
      className={cn(
        "bg-light-gray",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
    />
  );
}
