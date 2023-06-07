import Image from "next/image";

export function Profile() {
  return (
    <div className="pb-[50px] pr-[30px] text-center">
      <Image
        src="/images/avatar-1.png"
        alt=""
        width={90}
        height={90}
        quality={90}
        className="mx-auto mb-5"
      />
      <h2 className="text-xl font-bold text-dark-blue">Shayna Anne</h2>
      <p className="text-gray">shayna@anne.com</p>
    </div>
  );
}
