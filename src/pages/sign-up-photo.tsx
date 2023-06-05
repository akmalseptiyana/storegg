import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

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
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="60" cy="60" r="60" fill="#E7EAF5" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M60 52.5C57.0641 52.5 54.6239 54.2954 53.7502 56.711C53.559 57.2397 53.0883 57.617 52.5307 57.6886C49.915 58.0244 48 60.135 48 62.5714C48 65.2253 50.2807 67.5 53.25 67.5C54.0784 67.5 54.75 68.1716 54.75 69C54.75 69.8284 54.0784 70.5 53.25 70.5C48.7635 70.5 45 67.0184 45 62.5714C45 58.7996 47.7137 55.7171 51.2715 54.8729C52.7994 51.6764 56.1564 49.5 60 49.5C64.7615 49.5 68.8073 52.8602 69.4965 57.3516C72.5948 57.9685 75 60.5965 75 63.8571C75 67.594 71.841 70.5 68.1 70.5C67.2716 70.5 66.6 69.8284 66.6 69C66.6 68.1716 67.2716 67.5 68.1 67.5C70.3237 67.5 72 65.8009 72 63.8571C72 61.9134 70.3237 60.2143 68.1 60.2143C67.2716 60.2143 66.6 59.5427 66.6 58.7143C66.6 55.3504 63.7149 52.5 60 52.5Z"
                        fill="#0C145A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M60 70.5C59.1716 70.5 58.5 69.8284 58.5 69V60C58.5 59.1716 59.1716 58.5 60 58.5C60.8284 58.5 61.5 59.1716 61.5 60V69C61.5 69.8284 60.8284 70.5 60 70.5Z"
                        fill="#0C145A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.9393 64.0607C55.3536 63.4749 55.3536 62.5251 55.9393 61.9393L58.9393 58.9393C59.5251 58.3536 60.4749 58.3536 61.0607 58.9393C61.6464 59.5251 61.6464 60.4749 61.0607 61.0607L58.0607 64.0607C57.4749 64.6464 56.5251 64.6464 55.9393 64.0607Z"
                        fill="#0C145A"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M58.9393 58.9393C59.5251 58.3536 60.4749 58.3536 61.0607 58.9393L64.0607 61.9393C64.6464 62.5251 64.6464 63.4749 64.0607 64.0607C63.4749 64.6464 62.5251 64.6464 61.9393 64.0607L58.9393 61.0607C58.3536 60.4749 58.3536 59.5251 58.9393 58.9393Z"
                        fill="#0C145A"
                      />
                    </svg>
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
              <Button variant="primary">Create My Account</Button>
              <Button variant="link">Terms & Conditions</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
