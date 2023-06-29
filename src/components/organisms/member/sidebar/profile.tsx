import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { JWTPayloadTypes, UserTypes } from "@/services/types";

export function Profile() {
  const [user, setUser] = useState({
    avatar: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;
      userFromPayload.avatar = `${IMAGE_URL}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);

  return (
    <div className="pb-[50px] pr-[30px] text-center">
      <Image
        src={user.avatar}
        alt=""
        width={90}
        height={90}
        quality={90}
        unoptimized
        className="mx-auto mb-5 h-[90px] w-[90px] rounded-full object-cover"
      />
      <h2 className="text-xl font-bold text-dark-blue">{user.name}</h2>
      <p className="text-gray">{user.email}</p>
    </div>
  );
}
