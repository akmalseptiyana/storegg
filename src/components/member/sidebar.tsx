import {
  LayoutGrid,
  ShoppingBag,
  MessageCircle,
  CreditCard,
  Award,
  Settings,
  Power,
} from "lucide-react";
import Image from "next/image";

import WinnerIcon from "@/assets/winner.svg";
import { Button } from "../ui/button";

export function Sidebar() {
  return (
    <aside>
      <div className="no-scrollbar fixed left-0 top-0 z-10 h-screen w-[290px] overflow-y-auto bg-white pb-[30px] pl-[30px] pt-[50px]">
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
        <ul className="space-y-[30px]">
          <li className="active relative flex items-center">
            <LayoutGrid className="mr-3 text-gray" />
            <p className="item-title ">
              <a href="" className="text-lg text-gray">
                Overview
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <ShoppingBag className="mr-3 text-gray" />
            <p className="item-title ">
              <a
                href="../member/transactions.html"
                className="text-lg text-gray"
              >
                Transactions
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <MessageCircle className="mr-3 text-gray" />
            <p className="item-title ">
              <a href="" className="text-lg text-gray">
                Messages
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <CreditCard className="mr-3 text-gray" />
            <p className="item-title ">
              <a href="" className="text-lg text-gray">
                Card
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <Award className="mr-3 text-gray" />
            <p className="item-title ">
              <a href="" className="text-lg text-gray">
                Rewards
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <Settings className="mr-3 text-gray" />
            <p className="item-title ">
              <a
                href="../member/edit-profile.html"
                className="text-lg text-gray"
              >
                Settings
              </a>
            </p>
          </li>
          <li className="relative flex items-center">
            <Power className="mr-3 text-gray" />
            <p className="item-title ">
              <a href="" className="text-lg text-gray">
                Log Out
              </a>
            </p>
          </li>
        </ul>
        <div className="pr-[30px] pt-[73px]">
          <div className="rounded-2xl bg-[#F9FAFF] p-5">
            <div className="mb-5 flex justify-between">
              <WinnerIcon className="h-[50px] w-[50px]" />
              <p className="font-medium text-dark-blue">
                Top Up &<br />
                Be The Winner
              </p>
            </div>
            <Button
              variant="primary"
              className="h-[31px] w-full py-2 text-xs font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
