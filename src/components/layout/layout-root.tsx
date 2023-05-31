import { ReactNode } from "react";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

type Props = {
  children: ReactNode;
};

export function LayoutRoot({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
