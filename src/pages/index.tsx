import { useEffect } from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="StoreGG - Get a New Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:url" content="https://storegg.vercel.app" />
      </Head>
      <Layout>
        <Hero />
        <TransactionStep />
        <FeaturedGame />
        <Reached />
        <Story />
      </Layout>
    </>
  );
}
