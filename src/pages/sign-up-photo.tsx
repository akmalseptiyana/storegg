import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Select } from "@/components/atoms/select";
import { getGameCategory } from "@/services/player";
import { setSignUp } from "@/services/auth";
import { CategoryTypes } from "@/services/types";

export default function SignUpPhoto() {
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<any>("");
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });
  const router = useRouter();

  const getGameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem("user-form");
    const form = JSON.parse(getLocalForm!);
    const data = new FormData();

    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("username", form.name);
    data.append("phoneNumber", "08123456789");
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result.error) {
      return toast.error(result.message);
    } else {
      toast.success("Register Berhasil");
      router.push("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };

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
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="preview"
                        className="h-[120px] w-[120px] rounded-full object-cover"
                      />
                    ) : (
                      <Image
                        src="/icons/upload.svg"
                        alt="upload"
                        width={120}
                        height={120}
                      />
                    )}
                  </label>
                  <Input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    className="invisible h-0 w-0"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="text-center text-xl font-bold text-dark-blue">
                {localForm.name}
              </h2>
              <p className="text-center text-lg text-dark-blue">
                {localForm.email}
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
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map((category: CategoryTypes) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-y-[30px]">
              <Button
                type="button"
                variant="primary"
                className="w-full"
                onClick={onSubmit}
              >
                Create My Account
              </Button>
              <Button variant="link">Terms & Conditions</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
