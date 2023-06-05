import Image from "next/image";
import { Trash2 } from "lucide-react";

import { Sidebar } from "@/components/member/sidebar";
import { Input } from "@/components/ui/input";
import UploadIcon from "@/assets/upload.svg";
import { Button } from "@/components/ui/button";

export default function EditProfile() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
      <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
        <div className="lg:pl-0">
          <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
            Settings
          </h2>
          <div className="max-w-[590px] rounded-2xl bg-white p-[30px]">
            <form action="" className="max-w-[437px]">
              <div className="flex">
                <div className="relative mr-5">
                  <Image
                    src="/images/avatar-1.png"
                    alt=""
                    width={90}
                    height={90}
                  />
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
                <label
                  htmlFor="name"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  aria-describedby="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="pt-[30px]">
                <label
                  htmlFor="email"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  aria-aria-describedby="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="pt-[30px]">
                <label
                  htmlFor="phone"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Phone
                </label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  aria-describedby="phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="flex flex-col pt-[50px]">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full font-medium"
                >
                  Save My Profile
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
