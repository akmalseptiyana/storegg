import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu } from "lucide-react";

import { cn } from "@/utils/classnames";
import { homepageMenus } from "@/lib/home/homepage-menus";
import { Logo } from "../ui/logo";
import { Button } from "../ui/button";

export function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);
  const router = useRouter();

  return (
    <header>
      <nav className="mb-[50px] mt-[30px] flex h-full items-center bg-white lg:mt-10 lg:h-[60px]">
        <div className="container flex flex-wrap items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Button
            className="lg:hidden"
            type="button"
            variant="ghost"
            size={null}
            aria-label="Toggle navigation"
            onClick={() => setMenuActive(!isMenuActive)}
          >
            <Menu size={32} />
          </Button>
          <div
            className={cn(
              "transition-collapse mt-2 w-full overflow-hidden lg:mt-0 lg:h-max lg:w-max",
              isMenuActive ? "h-[310px]" : "h-0"
            )}
          >
            <ul className="flex flex-col items-start gap-y-6 lg:flex-row lg:items-center lg:gap-x-10">
              {homepageMenus.map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className={cn(
                      "text-lg font-normal",
                      router.pathname === href
                        ? "font-medium text-dark-blue"
                        : "text-gray"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              ))}
              <li className="w-full lg:w-fit">
                <Link href="/sign-in">
                  <Button className="w-full lg:w-[120px]" variant="secondary">
                    Sign In
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
