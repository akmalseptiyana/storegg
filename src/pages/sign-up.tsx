import Link from "next/link";

import Logo from "@/assets/logo.svg";
import { SignUpForm } from "@/components/organisms/sign-up/form";

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
          <SignUpForm />
        </form>
      </div>
    </section>
  );
}
