import { useEffect, useState } from "react";
import Image from "next/image";

export function CheckoutItem() {
  const [dataItem, setDataItem] = useState({
    thumbnail: "",
    name: "",
    category: {
      name: "",
    },
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    const dataItemLocal = JSON.parse(dataFromLocal!);
    setDataItem(dataItemLocal);
  }, []);

  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <div className="flex flex-row items-center py-[30px] md:py-[50px]">
      <div className="pr-4">
        <figure className="relative h-[140px] w-[110px] overflow-hidden rounded-[26px] md:h-[130px] md:w-[200px]">
          <Image
            src={`${IMAGE_URL}/${dataItem.thumbnail}`}
            alt=""
            fill
            unoptimized
            className="object-cover object-[center_20%]"
          />
        </figure>
      </div>
      <div>
        <p className="mb-[10px] text-xl font-bold text-dark-blue">
          {dataItem.name}
        </p>
        <p className="text-base font-normal text-gray">
          Category: {dataItem.category.name}
        </p>
      </div>
    </div>
  );
}
