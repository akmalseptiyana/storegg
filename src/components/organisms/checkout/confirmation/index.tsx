import Link from "next/link";

import { cn } from "@/utils/classnames";
import { Button } from "@/components/atoms/button";

export function CheckoutConfirmation() {
  return (
    <>
      <label className="relative block cursor-pointer select-none pl-[35px] text-lg text-dark-blue">
        <input
          type="checkbox"
          className="peer absolute h-0 w-0 cursor-pointer opacity-0"
        />
        <span
          className={cn(
            "absolute left-0 top-[3px] h-[22px] w-[22px] rounded-md border-2 border-dark-blue transition-all duration-[60ms] ease-linear",
            "after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-3.5 after:w-3.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded after:bg-secondary after:content-['']",
            "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-white peer-checked:after:block"
          )}
        />
        I have transferred the money
      </label>
      <div className="pt-[50px]">
        <Link href="/complete-checkout">
          <Button
            variant="primary"
            className="w-full px-6 font-medium sm:w-[250px]"
          >
            Confirm Payment
          </Button>
        </Link>
      </div>
    </>
  );
}
