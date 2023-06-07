import Link from "next/link";

import Logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="mt-[50px] bg-[#F9FAFF] py-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:justify-between xl:gap-x-[95px]">
          <div className="text-center lg:text-start">
            <Link href="/" className="inline-block">
              <Logo />
            </Link>
            <p className="my-[30px] text-lg text-dark-blue">
              StoreGG membantu gamers
              <br /> untuk menjadi pemenang sejati
            </p>
            <p className="my-[30px] text-lg text-dark-blue">
              Copyright 2021. All Rights Reserved.
            </p>
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="flex flex-wrap gap-x-10 gap-y-[50px] xl:gap-x-[100px]">
              {footerLinks.map(({ heading, links }) => (
                <div key={heading} className="flex-auto">
                  <p className="mb-3 text-lg font-semibold text-dark-blue">
                    {heading}
                  </p>
                  <ul className="space-y-[6px]">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href=""
                          className="text-lg text-dark-blue hover:text-primary hover:underline"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerLinks = [
  {
    heading: "Company",
    links: ["About Us", "Press Release", "Terms of Use", "Privacy & Policy"],
  },
  {
    heading: "Support",
    links: ["Refund Policy", "Unlock Rewards", "Live Chatting"],
  },
  {
    heading: "Connect",
    links: [
      "hi@store.gg",
      "team@store.gg",
      "Pasific 12, Jakarta Selatan",
      "021 - 1122 - 9090",
    ],
  },
];
