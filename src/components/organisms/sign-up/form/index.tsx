import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { Label } from "@/components/atoms/label";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onSubmit = () => {
    const userForm = {
      email,
      name,
      password,
    };

    localStorage.setItem("user-form", JSON.stringify(userForm));
    router.push("/sign-up-photo");
  };

  return (
    <>
      <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
        Sign Up
      </h2>
      <p className="text-lg text-dark-blue">Daftar dan bergabung dengan kami</p>
      <div className="pt-[50px]">
        <Label htmlFor="name" className="mb-[10px]">
          Full Name
        </Label>
        <Input
          id="name"
          aria-describedby="name"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="pt-[30px]">
        <Label htmlFor="email" className="mb-[10px]">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          aria-describedby="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="pt-[30px]">
        <Label htmlFor="password" className="mb-[10px]">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          aria-describedby="password"
          placeholder="Your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-y-4 pt-[50px]">
        <Button
          type="button"
          variant="primary"
          className="w-full font-medium"
          onClick={onSubmit}
        >
          Continue
        </Button>
        <Link href="/sign-in">
          <Button variant="secondary" className="w-full">
            Sign In
          </Button>
        </Link>
      </div>
    </>
  );
}
