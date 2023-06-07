import Link from "next/link";

import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

export function SignUpForm() {
  return (
    <>
      <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
        Sign Up
      </h2>
      <p className="text-lg text-dark-blue">Daftar dan bergabung dengan kami</p>
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
        <Link href="/sign-up-photo">
          <Button variant="primary" className="w-full font-medium">
            Continue
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button variant="secondary" className="w-full">
            Sign In
          </Button>
        </Link>
      </div>
    </>
  );
}
