import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Layout } from "@/components/templates/layout";
import { Hero } from "@/components/organisms/home/hero";
import { TransactionStep } from "@/components/organisms/home/transaction";
import { FeaturedGame } from "@/components/organisms/home/featured";
import { Reached } from "@/components/organisms/home/reached";
import { Story } from "@/components/organisms/home/story";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      <Hero />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
    </Layout>
  );
}
