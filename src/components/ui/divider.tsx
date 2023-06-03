import { cn } from "@/utils/classnames";

type Props = {
  className?: string;
};

export function Divider({ className }: Props) {
  return (
    <hr className={cn("border-0 border-b border-light-gray", className)} />
  );
}
