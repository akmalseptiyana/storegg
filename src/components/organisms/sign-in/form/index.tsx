import Link from "next/link";

import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

export function SignInForm() {
  return (
    <>
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
    </>
  );
}
