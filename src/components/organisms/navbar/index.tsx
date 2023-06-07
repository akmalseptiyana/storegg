import { useState } from "react";
import Link from "next/link";

import Logo from "@/assets/logo.svg";
import { cn } from "@/utils/classnames";
import { homepageMenus } from "@/lib/data/homepage-menus";
import { MenuLink } from "./menu-link";
import { Auth } from "./auth";
import { ToggleMenu } from "./toggle-menu";

export function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);

  return (
    <header>
      <nav className="mb-[50px] mt-[30px] flex h-full items-center bg-white lg:mt-10 lg:h-[60px]">
        <div className="container flex flex-wrap items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <ToggleMenu
            isMenuActive={isMenuActive}
            setMenuActive={setMenuActive}
          />
          <div
            className={cn(
              "transition-collapse mt-2 w-full overflow-hidden lg:mt-0 lg:h-max lg:w-max",
              isMenuActive ? "h-[310px]" : "h-0"
            )}
          >
            <ul className="flex flex-col items-start gap-y-6 lg:flex-row lg:items-center lg:gap-x-10">
              {homepageMenus.map((link, index) => (
                <MenuLink key={index} {...link} />
              ))}
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
