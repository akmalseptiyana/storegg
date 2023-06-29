import { useCallback, useEffect, useState } from "react";

import { GameItem } from "@/components/molecules/home/game-item";
import { getFeaturedGame } from "@/services/player";
import { GameItemTypes } from "@/services/types";

export function FeaturedGame() {
  const [gameList, setGameList] = useState([]);

  const getFeaturedGameList = useCallback(async () => {
    const data = await getFeaturedGame();
    setGameList(data);
  }, [getFeaturedGame]);

  useEffect(() => {
    getFeaturedGameList();
  }, []);

  return (
    <section className="py-[50px]">
      <div className="container">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Our Featured
          <br /> Games This Year
        </h2>
        <ul
          className="flex flex-row gap-4 overflow-x-auto overflow-y-hidden lg:flex-wrap lg:justify-between lg:gap-3"
          data-aos="fade-up"
        >
          {gameList.map((item: GameItemTypes) => (
            <GameItem
              key={item._id}
              id={item._id}
              name={item.name}
              thumbnail={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.thumbnail}`}
              category={item.category.name}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
