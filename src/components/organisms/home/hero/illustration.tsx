import Image from "next/image";

import { StarRating } from "@/components/atoms/star-rating";

export function Illustration() {
  return (
    <div className="hidden lg:block lg:h-[441px] lg:w-[454px] xl:mr-14 xl:h-[484px] xl:w-[490px]">
      <div className="flex h-full justify-center lg:w-[90%] lg:justify-end xl:w-full">
        <figure className="relative -z-10 flex-1" data-aos="zoom-in">
          <Image
            src="/images/banner.png"
            alt="games"
            fill
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
          <div className="absolute left-[-58px] top-[106.88px] z-10 h-[112px] w-[207px] rounded-2xl bg-white p-[14px] shadow-[-8px_8px_58px_0_rgba(0,0,0,0.1);]">
            <div className="mb-4 flex items-center gap-4">
              <Image
                src="/images/shayna.png"
                alt="shayna gamer"
                width={40}
                height={40}
                quality={90}
              />
              <div>
                <p className="text-sm font-medium text-dark-blue">
                  Shayna Anne
                </p>
                <p className="text-xs font-light text-gray">
                  Professional Gamer
                </p>
              </div>
            </div>
            <StarRating value={5} />
          </div>
          <div className="absolute bottom-[104px] right-[-51.2px] h-[177px] w-[135px] rounded-2xl bg-white px-6 py-5 shadow-[-8px_8px_58px_0_rgba(0,0,0,0.1);]">
            <div className="relative mb-6 flex flex-row justify-center">
              <Image
                src="/images/lann-knight.png"
                alt="lann knight dota 2"
                width={80}
                height={80}
                quality={90}
              />
              <p className="absolute inset-x-auto -bottom-2 w-max rounded-md bg-secondary  px-[10px] py-[1.008px] text-center text-[10px] text-white">
                New
              </p>
            </div>
            <div>
              <p className="text-center text-sm font-medium text-dark-blue">
                Lann Knight
              </p>
              <p className="text-center text-xs font-light text-gray">Dota 2</p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  );
}
