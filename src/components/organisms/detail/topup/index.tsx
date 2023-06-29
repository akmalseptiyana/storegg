import Image from "next/image";

interface TopUpItemProps {
  type: "desktop" | "mobile";
  data: {
    name: string;
    thumbnail: string;
    category: {
      name: string;
    };
  };
}

export function TopUpItem({ type, data }: TopUpItemProps) {
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  if (type === "desktop") {
    return (
      <div className="hidden pb-[50px] md:block">
        <h2 className="my-[10px] text-start text-[32px] font-bold text-dark-blue">
          {data.name}
        </h2>
        <p className="mb-0 text-lg text-gray">Category: {data.category.name}</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-5">
      <figure className="flex-1">
        <Image
          src={`${IMAGE_URL}/${data.thumbnail}`}
          width={280}
          height={380}
          className="h-auto max-w-full rounded-[26px]"
          alt=""
          unoptimized
        />
      </figure>

      <div className="block md:hidden">
        <h2 className="mb-[10px] text-start text-xl font-bold text-dark-blue">
          {data.name}
        </h2>
        <p className="mb-0 text-start text-sm text-dark-blue">
          Category: {data.category.name}
        </p>
      </div>
    </div>
  );
}
