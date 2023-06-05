import Link from "next/link";
import Image from "next/image";

import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <section className="mx-auto">
      <div className="flex items-center justify-between">
        <div className="pb-[47px] pt-[30px] lg:py-[50px]">
          <form action="">
            <div className="container">
              <div className="pb-[50px]">
                <Link href="/">
                  <Logo />
                </Link>
              </div>
              <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
                Sign In
              </h2>
              <p className="text-lg text-dark-blue">
                Masuk untuk melakukan proses top up
              </p>
              <div className="pt-[50px]">
                <label
                  htmlFor="email"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  aria-describedby="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="pt-[30px]">
                <label
                  htmlFor="email"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Password
                </label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  aria-describedby="password"
                  placeholder="Your password"
                />
              </div>
              <div className="mx-auto flex flex-col gap-y-4 pt-[50px]">
                <Button variant="primary" className="font-medium">
                  Continue to Sign In
                </Button>
                <Link href="/sign-up">
                  <Button variant="secondary" className="w-full">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden flex-1 bg-[#1A1640] text-center lg:block lg:py-[145px]">
          <Image
            src="/images/Header-9.png"
            width={502}
            height={391.21}
            className="mx-auto pb-[50px]"
            alt=""
          />
          <h2 className="mb-[30px] text-[32px] font-bold text-white">
            Win the battle.
            <br />
            Be the Champion.
          </h2>
          <p className="m-0 text-white">
            Kami menyediakan jutaan cara untuk
            <br /> membantu players menjadi
            <br />
            pemenang sejati
          </p>
        </div>
      </div>
    </section>
  );
}
