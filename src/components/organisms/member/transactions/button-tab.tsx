import { Button } from "@/components/atoms/button";
import { cn } from "@/utils/classnames";

interface ButtonTabProps {
  title: string;
  active?: boolean;
}

export function ButtonTab({ title, active }: ButtonTabProps) {
  return (
    <Button
      variant="secondary"
      className={cn("h-10 w-28 text-sm", { "bg-[#2B2467] text-white": active })}
    >
      {title}
    </Button>
  );
}
