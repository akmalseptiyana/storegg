import GameDesktopIcon from "@/assets/game-desktop.svg";
import GameMobileIcon from "@/assets/game-mobile.svg";
import { Category } from "./category";
import { OverviewTable } from "./table";

export function OverviewContent() {
  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pr-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Overview
        </h2>
        <div className="mb-[30px]">
          <p className="mb-3.5 text-xl font-medium text-dark-blue">
            Top Up Categories
          </p>
          <div className="max-w-[900px]">
            <div className="flex gap-x-[30px]">
              <Category price={18000500} Icon={GameDesktopIcon}>
                Game <br /> Desktop
              </Category>
              <Category price={5000000} Icon={GameMobileIcon}>
                Game <br /> Mobile
              </Category>
              <Category price={8500000} Icon={GameDesktopIcon}>
                Others <br /> Categories
              </Category>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3.5 text-lg font-medium text-dark-blue">
            Latest Transactions
          </p>
          <div className="max-w-[900px] overflow-auto rounded-2xl bg-white px-[30px] py-5">
            <OverviewTable />
          </div>
        </div>
      </div>
    </main>
  );
}
