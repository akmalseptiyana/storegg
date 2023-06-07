import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/utils/classnames";

interface MenuLinkProps extends LinkProps {
  name: string;
  className?: string;
}

export function MenuLink({ className, href, name, ...props }: MenuLinkProps) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-lg font-normal",
          router.pathname === href ? "font-medium text-dark-blue" : "text-gray",
          className
        )}
        {...props}
      >
        {name}
      </Link>
    </li>
  );
}
