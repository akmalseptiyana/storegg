import Image from "next/image";

interface TopUpItemProps {
  type: "desktop" | "mobile";
}

export function TopUpItem({ type }: TopUpItemProps) {
  if (type === "desktop") {
    return (
      <div className="hidden pb-[50px] md:block">
        <h2 className="my-[10px] text-start text-[32px] font-bold text-dark-blue">
          Mobile Legends:
          <br />
          The New Battle 2021
        </h2>
        <p className="mb-0 text-lg text-gray">Category: Mobile</p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-x-5">
      <figure className="flex-1">
        <Image
          src="/images/Thumbnail-3.png"
          width={280}
          height={380}
          className="h-auto max-w-full rounded-[26px]"
          alt=""
        />
      </figure>

      <div className="block md:hidden">
        <h2 className="mb-[10px] text-start text-xl font-bold text-dark-blue">
          Mobile Legends:
          <br />
          The New Battle 2021
        </h2>
        <p className="mb-0 text-start text-sm text-dark-blue">
          Category: Mobile
        </p>
      </div>
    </div>
  );
}
