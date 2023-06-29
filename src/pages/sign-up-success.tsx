import Link from "next/link";

import Wallet from "@/assets/wallet.svg";
import { Button } from "@/components/atoms/button";

export default function SignUpSuccess() {
  return (
    <section className="pb-[100px] pt-[150px] md:py-[179px]">
      <div className="container">
        <div className="text-center">
          <Wallet className="mx-auto h-[300px] w-[315px] max-w-full" />
        </div>
        <div className="pb-[150px] pt-[70px] md:pb-[50px]">
          <h2 className="mb-[10px] text-center text-[32px] font-bold text-dark-blue">
            Well Done!
          </h2>
          <p className="text-center text-lg text-dark-blue">
            Kamu sudah bisa melakukan top up
            <br className="hidden sm:block" />
            dan menjadi pemenang!
          </p>
        </div>
        <div className="flex flex-col">
          <Link href="/sign-in">
            <Button
              variant="primary"
              className="font-medium md:mx-auto md:w-[170px]"
            >
              Top Up
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
