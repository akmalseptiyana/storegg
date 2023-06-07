import Image from "next/image";
import { Trash2 } from "lucide-react";

import UploadIcon from "@/assets/upload.svg";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { Label } from "@/components/atoms/label";

export function EditProfileForm() {
  return (
    <form action="" className="max-w-[437px]">
      <div className="flex">
        <div className="relative mr-5">
          <Image src="/images/avatar-1.png" alt="" width={90} height={90} />
          <div className="absolute top-0 flex h-[90px] w-[90px] cursor-pointer items-center justify-center rounded-full bg-dark-blue/70 opacity-0 transition-all duration-300 ease-linear hover:opacity-100">
            <Trash2 className="text-white" />
          </div>
        </div>
        <div>
          <label htmlFor="avatar" className="cursor-pointer">
            <UploadIcon className="h-[90px] w-[90px]" />
          </label>
          <Input
            id="avatar"
            type="file"
            name="avatar"
            accept="image/png, image/jpeg"
            className="invisible h-0 w-0"
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
          aria-describedby="name"
          placeholder="Enter your name"
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
          aria-describedby="email"
          placeholder="Enter your email address"
        />
      </div>
      <div className="pt-[30px]">
        <Label htmlFor="phone" className="mb-[10px]">
          Phone
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          aria-describedby="phone"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="flex flex-col pt-[50px]">
        <Button type="submit" variant="primary" className="w-full font-medium">
          Save My Profile
        </Button>
      </div>
    </form>
  );
}
