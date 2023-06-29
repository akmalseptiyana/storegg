import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { Button } from "@/components/atoms/button";
import { Divider } from "@/components/atoms/divider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown";
import { JWTPayloadTypes, UserTypes } from "@/services/types";

export function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
      userFromPayload.avatar = `${IMAGE_URL}/${userFromPayload.avatar}`;
      setIsLogin(true);
      setUser(userFromPayload);
    }
  }, []);

  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };

  if (isLogin) {
    return (
      <>
        <Divider orientation="vertical" className="h-10" />
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Image
                src={user.avatar}
                alt=""
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 rounded-full object-cover"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={20}>
              <DropdownMenuItem>
                <Link href="/member">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Wallet</DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/member/edit-profile">Account Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={onLogout}>Log Out</DropdownMenuItem>
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
