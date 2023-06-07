import { ReactNode } from "react";

import { Navbar } from "../organisms/navbar";
import { Footer } from "../organisms/footer";

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
