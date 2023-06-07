import Link from "next/link";

import { cn } from "@/utils/classnames";
import { topUp } from "@/lib/data/top-up";
import { formatValueToCurrency } from "@/utils/currency";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";

export function TopUpForm() {
  return (
    <form action="./checkout.html" method="POST">
      <div className="pt-[30px] md:pt-[50px]">
        <div className="flex flex-col">
          <label
            htmlFor="ID"
            className="mb-[10px] inline-block text-lg font-medium text-dark-blue"
          >
            Verify ID
          </label>
          <Input
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            className="sm:max-w-[437px]"
          />
        </div>
      </div>
      <div className="pb-5 pt-[30px] md:py-[50px]">
        <p className="mb-[10px] text-lg font-medium text-dark-blue">
          Nominal Top Up
        </p>
        <div className="flex flex-wrap gap-4 lg:gap-[30px]">
          {topUp.map(({ amount, price }, index) => (
            <label
              key={index}
              className="w-full sm:max-w-[260px]"
              htmlFor={`topup${index}`}
            >
              <input
                className="peer hidden"
                type="radio"
                id={`topup${index}`}
                name="topup"
                value={`topup${index}`}
              />
              <div
                className={cn(
                  "group h-[131px] cursor-pointer rounded-[26px] bg-[#F9FAFF] p-[30px] transition-all duration-100",
                  "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary/[0.05]"
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="m-0 text-3xl font-light text-dark-blue">
                    <span className="font-medium">{amount}</span> Gold
                  </p>
                  <svg
                    className={cn(
                      "invisible transition-all duration-100",
                      "group-[.peer:checked+&]:visible"
                    )}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="m-0 text-lg text-dark-blue">
                  {formatValueToCurrency(price)}
                </p>
              </div>
            </label>
          ))}
        </div>
      </div>
      <div className="pb-5 md:pb-[50px]">
        <p className="mb-[10px] text-lg font-medium text-dark-blue">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="flex flex-wrap gap-4 lg:gap-[30px]">
            <label className="w-full sm:max-w-[260px]" htmlFor="transfer">
              <input
                className="peer hidden"
                type="radio"
                id="transfer"
                name="paymentMethod"
                value="transfer"
              />
              <div
                className={cn(
                  "group h-[131px] cursor-pointer rounded-[26px] bg-[#F9FAFF] p-[30px] transition-all duration-100",
                  "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary/[0.05]"
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="m-0 text-3xl text-dark-blue">Transfer</p>
                  <svg
                    className={cn(
                      "invisible transition-all duration-100",
                      "group-[.peer:checked+&]:visible"
                    )}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="m-0 text-lg text-dark-blue">
                  Worldwide Available
                </p>
              </div>
            </label>
            <label className="w-full sm:max-w-[260px]" htmlFor="visa">
              <input
                className="peer hidden"
                type="radio"
                id="visa"
                name="paymentMethod"
                value="visa"
              />
              <div
                className={cn(
                  "group h-[131px] cursor-pointer rounded-[26px] bg-[#F9FAFF] p-[30px] transition-all duration-100",
                  "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary/[0.05]"
                )}
              >
                <div className="flex items-center justify-between">
                  <p className="m-0 text-3xl text-dark-blue">VISA</p>
                  <svg
                    className={cn(
                      "invisible transition-all duration-100",
                      "group-[.peer:checked+&]:visible"
                    )}
                    id="icon-check"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="10" cy="10" r="10" fill="#CDF1FF" />
                    <path
                      d="M5.83301 10L8.46459 12.5L14.1663 7.5"
                      stroke="#00BAFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="m-0 text-lg text-dark-blue">Credit card</p>
              </div>
            </label>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col pb-[50px]">
        <label
          htmlFor="bankAccount"
          className="mb-[10px] text-lg font-medium text-dark-blue"
        >
          Bank Account Name
        </label>
        <Input
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          className="sm:max-w-[437px]"
        />
      </div>
      <Link href="/checkout">
        <Button
          variant="primary"
          type="submit"
          className="w-full font-medium sm:w-[170px]"
        >
          Continue
        </Button>
      </Link>
    </form>
  );
}
