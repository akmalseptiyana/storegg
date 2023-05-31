import Image from "next/image";

import { Button } from "../ui/button";

export function HomeStory() {
  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="flex items-center gap-4 lg:justify-center lg:gap-[120px]">
          <div className="hidden lg:block" data-aos="zoom-in">
            <Image
              src="/images/Header-9.png"
              alt="boy play vr"
              width={612}
              height={452}
              className="flex-1"
            />
          </div>
          <div className="w-full md:w-max">
            <div>
              <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
                Win the battle.
                <br /> Be the Champion.
              </h2>
              <p className="mb-[30px] text-lg text-dark-blue">
                Kami menyediakan jutaan cara untuk
                <br className="hidden sm:block" />
                membantu players menjadi
                <br className="hidden sm:block" /> pemenang sejati
              </p>
              <div>
                <Button variant="secondary" className="w-full md:w-[190px]">
                  Read Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
