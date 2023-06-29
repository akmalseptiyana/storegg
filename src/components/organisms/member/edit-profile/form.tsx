import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { Label } from "@/components/atoms/label";
import { JWTPayloadTypes, UserTypes } from "@/services/types";
import { updateProfile } from "@/services/member";

interface UserStateTypes {
  id: string;
  name: string;
  email: string;
  avatar: any;
}

export function EditProfileForm() {
  const [user, setUser] = useState<UserStateTypes>({
    id: "",
    name: "",
    email: "",
    avatar: "",
  });
  const [imagePreview, setImagePreview] = useState("/");
  const router = useRouter();

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

  const onSubmit = async () => {
    const data = new FormData();

    data.append("image", user.avatar);
    data.append("name", user.name);
    const response = await updateProfile(data);

    if (response.error) {
      return toast.error(response.message);
    } else {
      Cookies.remove("token");
      router.push("/sign-in");
    }
  };

  return (
    <form action="" className="max-w-[437px]">
      <div className="flex">
        <div>
          <label htmlFor="avatar" className="cursor-pointer">
            {imagePreview === "/" ? (
              <Image
                src={user.avatar}
                alt="upload"
                width={90}
                height={90}
                unoptimized
                className="h-[90px] w-[90px] rounded-full object-cover"
              />
            ) : (
              <Image
                src={imagePreview}
                alt="upload"
                width={90}
                height={90}
                unoptimized
                className="h-[90px] w-[90px] rounded-full object-cover"
              />
            )}
          </label>
          <Input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            className="invisible h-0 w-0"
            onChange={(event) => {
              const img = event.target.files![0];
              setImagePreview(URL.createObjectURL(img));
              return setUser({
                ...user,
                avatar: img,
              });
            }}
          />
        </div>
      </div>
      <div className="pt-[30px]">
        <Label htmlFor="name" className="mb-[10px]">
          Full Name
        </Label>
        <Input
          id="name"
          name="name"
          value={user.name}
          aria-describedby="name"
          placeholder="Enter your name"
          onChange={(event) =>
            setUser({
              ...user,
              name: event.target.value,
            })
          }
        />
      </div>
      <div className="pt-[30px]">
        <Label htmlFor="email" className="mb-[10px]">
          Email Address
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={user.email}
          aria-describedby="email"
          placeholder="Enter your email address"
          className="disabled:cursor-not-allowed"
          disabled
        />
      </div>
      <div className="flex flex-col pt-[50px]">
        <Button
          type="button"
          variant="primary"
          className="w-full font-medium"
          onClick={onSubmit}
        >
          Save My Profile
        </Button>
      </div>
    </form>
  );
}
