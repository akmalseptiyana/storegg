import Link from "next/link";

import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <section className="pb-[47px] pt-[30px] lg:py-[100px]">
      <div className="container">
        <form action="" className="mx-auto max-w-[437px]">
          <div className="pb-[50px]">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
            Sign Up
          </h2>
          <p className="text-lg text-dark-blue">
            Daftar dan bergabung dengan kami
          </p>
          <div className="pt-[50px]">
            <label
              htmlFor="name"
              className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
            >
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              aria-describedby="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-[30px]">
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
              htmlFor="password"
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
          <div className="flex flex-col gap-y-4 pt-[50px]">
            <Button variant="primary" className="font-medium">
              Continue
            </Button>
            <Link href="/sign-in">
              <Button variant="secondary" className="w-full">
                Sign In
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}
