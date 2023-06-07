import WinnerIcon from "@/assets/winner.svg";
import { Button } from "@/components/atoms/button";

export function Footer() {
  return (
    <div className="pr-[30px] pt-[73px]">
      <div className="rounded-2xl bg-[#F9FAFF] p-5">
        <div className="mb-5 flex justify-between">
          <WinnerIcon className="h-[50px] w-[50px]" />
          <p className="font-medium text-dark-blue">
            Top Up &<br />
            Be The Winner
          </p>
        </div>
        <Button
          variant="primary"
          className="h-[31px] w-full py-2 text-xs font-medium"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
