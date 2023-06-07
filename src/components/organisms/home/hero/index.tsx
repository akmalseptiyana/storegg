import Link from "next/link";

import { Button } from "@/components/atoms/button";
import { Illustration } from "./illustration";

export function Hero() {
  return (
    <section className="pb-[50px] lg:pt-[60px]">
      <div className="container">
        <div className="flex items-center justify-between gap-20 xl:gap-0">
          <div className="flex-1">
            <p className="text-lg text-gray">Halo gamers,</p>
            <h1 className="text-[42px] font-bold leading-normal text-dark-blue">
              Topup & Get <span className="hidden sm:inline">a</span>
              <span className="inline sm:hidden">a</span>
              <span className="lg:underline-blue relative"> New</span>{" "}
              <br className="hidden sm:block" />{" "}
              <span className="lg:underline-blue relative">Experience</span> in
              Gaming
            </h1>
            <p className="mb-10 mt-[30px] text-lg text-dark-blue">
              Kami menyediakan jutaan cara untuk membantu
              <br className="hidden md:block" /> players menjadi pemenang sejati
            </p>
            <div className="flex flex-col gap-5 lg:flex-row">
              <Link href="#feature">
                <Button
                  variant="primary"
                  className="w-full font-medium lg:w-[200px]"
                >
                  Get Started
                </Button>
              </Link>
              <Button variant="link" size={null}>
                Learn More
              </Button>
            </div>
          </div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
