import { useRouter } from "next/router";
import {
  LayoutGrid,
  ShoppingBag,
  MessageCircle,
  CreditCard,
  Award,
  Settings,
  Power,
} from "lucide-react";
import Cookies from "js-cookie";

import { Profile } from "./profile";
import { Footer } from "./footer";
import { MenuItem } from "./menu-item";

export function Sidebar() {
  const router = useRouter();

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/sign-in");
  };

  return (
    <aside>
      <div className="no-scrollbar fixed left-0 top-0 z-10 h-screen w-[290px] overflow-y-auto bg-white pb-[30px] pl-[30px] pt-[50px]">
        <Profile />
        <ul className="space-y-[30px]">
          <MenuItem href="/member" title="Overview" Icon={LayoutGrid} />
          <MenuItem
            href="/member/transactions"
            title="Transactions"
            Icon={ShoppingBag}
          />
          <MenuItem
            href="/member/messages"
            title="Messages"
            Icon={MessageCircle}
          />
          <MenuItem href="/member/card" title="Card" Icon={CreditCard} />
          <MenuItem href="/member/rewards" title="Rewards" Icon={Award} />
          <MenuItem
            href="/member/edit-profile"
            title="Settings"
            Icon={Settings}
          />
          <MenuItem title="Log Out" Icon={Power} onClick={onLogout} />
        </ul>
        <Footer />
      </div>
    </aside>
  );
}
