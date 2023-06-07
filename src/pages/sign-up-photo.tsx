import Link from "next/link";

import Upload from "@/assets/upload.svg";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Select } from "@/components/atoms/select";

export default function SignUpPhoto() {
  return (
    <section className="pb-[50px] pt-[130px] lg:py-[227px]">
      <div className="container">
        <form action="" className="mx-auto max-w-[437px]">
          <div className="flex h-screen flex-col justify-between md:block md:h-full">
            <div>
              <div className="mb-5">
                <div className="text-center">
                  <label
                    htmlFor="avatar"
                    className="mx-auto block w-max cursor-pointer"
                  >
                    <Upload className="h-[120px] w-[120px]" />
                  </label>
                  <Input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    className="invisible h-0 w-0"
                  />
                </div>
              </div>
              <h2 className="text-center text-xl font-bold text-dark-blue">
                Shayna Anne
              </h2>
              <p className="text-center text-lg text-dark-blue">
                shayna@anne.com
              </p>
              <div className="py-[50px]">
                <label
                  htmlFor="category"
                  className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
                >
                  Favorite Game
                </label>
                <Select
                  id="category"
                  name="category"
                  aria-label="Favorite game"
                  defaultValue="default"
                >
                  <option value="default" disabled>
                    Select Category
                  </option>
                  <option value="fps">First Person Shoter</option>
                  <option value="rpg">Role Playing Game</option>
                  <option value="arcade">Arcade</option>
                  <option value="sport">Sport</option>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-y-[30px]">
              <Link href="/sign-up-success">
                <Button variant="primary" className="w-full">
                  Create My Account
                </Button>
              </Link>
              <Button variant="link">Terms & Conditions</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
