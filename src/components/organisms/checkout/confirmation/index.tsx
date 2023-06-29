import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { cn } from "@/utils/classnames";
import { Label } from "@/components/atoms/label";
import { Button } from "@/components/atoms/button";
import { setCheckout } from "@/services/player";

export function CheckoutConfirmation() {
  const [checkbox, setCheckbox] = useState(false);
  const router = useRouter();

  const onSubmit = async () => {
    if (!checkbox) {
      return toast.error("Pastikan anda telah melakukan pembayaran!");
    }

    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopUpLocal = localStorage.getItem("data-topup");
    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopUpLocal!);

    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };
    const response = await setCheckout(data);

    if (response.error) {
      return toast.error(response.message);
    } else {
      toast.success("Checkout Berhasil");
      router.push("/complete-checkout");
    }
  };

  return (
    <>
      <Label className="relative cursor-pointer select-none pl-[35px] font-normal">
        <input
          type="checkbox"
          className="peer absolute h-0 w-0 cursor-pointer opacity-0"
          onChange={(event) => setCheckbox(event.target.checked)}
        />
        <span
          className={cn(
            "absolute left-0 top-[3px] h-[22px] w-[22px] rounded-md border-2 border-dark-blue transition-all duration-[60ms] ease-linear",
            "after:absolute after:left-1/2 after:top-1/2 after:hidden after:h-3.5 after:w-3.5 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded after:bg-secondary after:content-['']",
            "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-white peer-checked:after:block"
          )}
        />
        I have transferred the money
      </Label>
      <div className="pt-[50px]">
        <Button
          type="button"
          variant="primary"
          className="w-full px-6 font-medium sm:w-[250px]"
          onClick={onSubmit}
        >
          Confirm Payment
        </Button>
      </div>
    </>
  );
}
