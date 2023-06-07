import { gameCards } from "@/lib/data/game-cards";
import { GameItem } from "@/components/molecules/home/game-item";

export function FeaturedGame() {
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
          {gameCards.map((item, index) => (
            <GameItem key={index} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
