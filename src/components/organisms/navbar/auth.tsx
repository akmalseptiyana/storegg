import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/atoms/button";
import { Divider } from "@/components/atoms/divider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown";

interface AuthProps {
  isLogin?: boolean;
}

export function Auth({ isLogin }: AuthProps) {
  if (isLogin) {
    return (
      <>
        <Divider orientation="vertical" className="h-10" />
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image src="/images/avatar-1.png" alt="" width={40} height={40} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={20}>
              <DropdownMenuItem>
                <Link href="/member">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Wallet</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/member/edit-profile">Account Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sign-in">Log Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </>
    );
  }

  return (
    <li className="w-full lg:w-fit">
      <Link href="/sign-in">
        <Button className="w-full lg:w-[120px]" variant="secondary">
          Sign In
        </Button>
      </Link>
    </li>
  );
}
