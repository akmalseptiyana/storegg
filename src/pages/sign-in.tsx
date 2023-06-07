import Link from "next/link";
import Image from "next/image";

import Logo from "@/assets/logo.svg";
import { SignInForm } from "@/components/organisms/sign-in/form";

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
              <SignInForm />
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
