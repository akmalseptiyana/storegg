import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { cn } from "@/utils/classnames";

export default function Checkout() {
  return (
    <section className="mx-auto py-[30px] md:pb-[145px] md:pt-[100px]">
      <div className="container">
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
        <div className="flex flex-row items-center py-[30px] md:py-[50px]">
          <div className="pr-4">
            <figure className="relative h-[140px] w-[110px] overflow-hidden rounded-[26px] md:h-[130px] md:w-[200px]">
              <Image
                src="/images/Thumbnail-3.png"
                alt=""
                fill
                className="object-cover object-[center_20%]"
              />
            </figure>
          </div>
          <div>
            <p className="mb-[10px] text-xl font-bold text-dark-blue">
              Mobile Legends:
              <br /> The New Battle 2021
            </p>
            <p className="text-base font-normal text-gray">Category: Mobile</p>
          </div>
        </div>
        <Divider />
        <div className="pt-[30px] md:pt-[50px]">
          <h2 className="mb-5 text-xl font-bold text-dark-blue">
            Purchase Details
          </h2>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Your Game ID{" "}
            <span className="block font-medium">masayoshizero</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Order ID <span className="block font-medium">#GG001</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Item <span className="block font-medium">250 Diamonds</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Price <span className="block font-medium">Rp 42.280.500</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Tax (10%) <span className="block font-medium">Rp 4.228.000</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Total{" "}
            <span className="block font-medium text-primary">
              Rp 55.000.600
            </span>
          </p>
        </div>
        <div className="py-[10px] md:py-[50px]">
          <h2 className="mb-5 text-xl font-bold text-dark-blue md:flex md:items-center md:justify-between">
            Payment Informations
          </h2>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Your Account Name{" "}
            <span className="block font-medium">Masayoshi Angga Zero</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Type <span className="block font-medium">Worldwide Transfer</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Bank Name <span className="block font-medium">Mandiri</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Bank Account Name{" "}
            <span className="block font-medium">PT Store GG Indonesia</span>
          </p>
          <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
            Bank Number{" "}
            <span className="block font-medium">1800 - 9090 - 2021</span>
          </p>
        </div>
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
          <Link href="/complete">
            <Button
              variant="primary"
              className="w-full px-6 font-medium sm:w-[250px]"
            >
              Confirm Payment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
