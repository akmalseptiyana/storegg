import Image from "next/image";

export function CheckoutItem() {
  return (
    <div className="flex flex-row items-center py-[30px] md:py-[50px]">
      <div className="pr-4">
        <figure className="relative h-[140px] w-[110px] overflow-hidden rounded-[26px] md:h-[130px] md:w-[200px]">
          <Image
            src="/images/Thumbnail-3.png"
            alt=""
            fill
            className="object-cover object-[center_20%]"
          />
        </figure>
      </div>
      <div>
        <p className="mb-[10px] text-xl font-bold text-dark-blue">
          Mobile Legends:
          <br /> The New Battle 2021
        </p>
        <p className="text-base font-normal text-gray">Category: Mobile</p>
      </div>
    </div>
  );
}
