import Link from "next/link";

import Logo from "@/assets/logo.svg";
import { CheckoutConfirmation } from "@/components/organisms/checkout/confirmation";
import { CheckoutDetail } from "@/components/organisms/checkout/detail";
import { CheckoutItem } from "@/components/organisms/checkout/item";
import { Divider } from "@/components/atoms/divider";

export default function Checkout() {
  return (
    <section className="mx-auto max-w-[800px] py-[30px] md:pb-[145px] md:pt-[100px]">
      <div className="px-4 lg:px-0">
        <div className="pb-[50px] text-start md:text-center">
          <Link href="/" className="inline-block">
            <Logo />
          </Link>
        </div>
        <div className="pt-0 md:pt-[50px]">
          <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
            Checkout
          </h2>
          <p className="mb-0 text-lg text-dark-blue">
            Waktunya meningkatkan cara bermain
          </p>
        </div>
        <CheckoutItem />
        <Divider orientation="horizontal" />
        <CheckoutDetail />
        <CheckoutConfirmation />
      </div>
    </section>
  );
}
