import Link from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/utils/classnames";

interface MenuItemProps {
  title: string;
  Icon: any;
  href: string;
}

export function MenuItem({ title, Icon, href }: MenuItemProps) {
  const router = useRouter();

  return (
    <li className="group relative flex items-center">
      <Icon
        className={cn(
          "mr-3 text-gray transition-all duration-200 ease-linear group-hover:stroke-primary",
          router.pathname === href ? "stroke-primary" : ""
        )}
      />
      <Link
        href={href}
        className={cn(
          "text-lg text-gray transition-all duration-200 ease-linear hover:font-medium group-hover:text-dark-blue",
          router.pathname === href
            ? "font-medium text-dark-blue after:absolute after:right-0 after:h-full after:w-0 after:rounded-full after:border-2 after:border-secondary after:bg-secondary after:transition-all after:duration-200 after:ease-linear after:content-['']"
            : ""
        )}
      >
        {title}
      </Link>
    </li>
  );
}
