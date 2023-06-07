import Image from "next/image";
import Link from "next/link";

import Console from "@/assets/console.svg";
import { cn } from "@/utils/classnames";
import type { gameCardItem } from "@/lib/data/game-cards";

interface GameItemProps extends gameCardItem {}

export function GameItem({
  name,
  imageUrl,
  platform,
  ...props
}: GameItemProps) {
  return (
    <li
      className={cn(
        "group relative h-[270px] w-[205px] shrink-0 rounded-[26px]",
        "hover:transition-featured-game-card hover:border-4 hover:border-[#2B2467]"
      )}
      {...props}
    >
      <Link href="/detail">
        <div
          className={cn(
            "overflow-hidden rounded-[26px]",
            "group-hover:absolute group-hover:left-1/2 group-hover:top-1/2 group-hover:w-[192px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:border-[7px] group-hover:border-white"
          )}
        >
          <Image
            src={imageUrl}
            alt={name}
            width={205}
            height={270}
            className={cn(
              "h-[270px] w-[205px]",
              "group-hover:transition-featured-game-card group-hover:h-[246px] group-hover:w-[181px] group-hover:blur-2xl"
            )}
          />
        </div>
        <div
          className={cn(
            "transition-featured-game-card h-fill absolute inset-x-0 bottom-0 m-8 opacity-0",
            "group-hover:opacity-100"
          )}
        >
          <div className="flex h-full flex-col justify-between">
            <div className="mx-auto mt-[50px]">
              <Console />
            </div>
            <div>
              <p className="text-xl font-semibold text-white">{name}</p>
              <p className="text-base font-light text-white">{platform}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
