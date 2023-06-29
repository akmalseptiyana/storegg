import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

import { Label } from "@/components/atoms/label";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { setLogin } from "@/services/auth";

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async () => {
    const data = {
      email,
      password,
    };

    if (!email || !password) {
      return toast.error("Email dan password wajib diisi!");
    } else {
      const response = await setLogin(data);
      if (response.error) {
        return toast.error(response.message);
      } else {
        toast.success("Login Berhasil");
        const { token } = response.data;
        const tokenBase64 = btoa(token);
        Cookies.set("token", tokenBase64, { expires: 1 });
        router.push("/");
      }
    }
  };

  return (
    <>
      <h2 className="mb-[10px] text-[32px] font-bold text-dark-blue">
        Sign In
      </h2>
      <p className="text-lg text-dark-blue">
        Masuk untuk melakukan proses top up
      </p>
      <div className="pt-[50px]">
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
      <div className="mx-auto flex flex-col gap-y-4 pt-[50px]">
        <Button
          type="button"
          variant="primary"
          className="font-medium"
          onClick={onSubmit}
        >
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
