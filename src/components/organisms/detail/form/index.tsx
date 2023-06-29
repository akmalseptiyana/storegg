import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

import { Label } from "@/components/atoms/label";
import { Input } from "@/components/atoms/input";
import { Button } from "@/components/atoms/button";
import { PaymentItem } from "./payment-item";
import { NominalItem } from "./nominal-item";
import { BanksTypes, NominalsTypes, PaymentTypes } from "@/services/types";

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export function TopUpForm({ nominals, payments }: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState<null | NominalsTypes>(null);
  const [paymentItem, setPaymentItem] = useState<null | {
    payment: PaymentTypes;
    bank: BanksTypes;
  }>(null);
  const router = useRouter();

  const onNominalItemChange = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentItemChange = (payment: PaymentTypes, bank: BanksTypes) => {
    const data = {
      payment,
      bank,
    };

    setPaymentItem(data);
  };

  const onSubmit = () => {
    if (
      verifyID === "" ||
      bankAccountName === "" ||
      !nominalItem ||
      !paymentItem
    ) {
      return toast.error("silakan isi semua data!");
    } else {
      const data = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };

      localStorage.setItem("data-topup", JSON.stringify(data));
      router.push("/checkout");
    }
  };

  return (
    <>
      <div className="pt-[30px] md:pt-[50px]">
        <div className="flex flex-col">
          <Label htmlFor="ID" className="mb-[10px]">
            Verify ID
          </Label>
          <Input
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            className="sm:max-w-[437px]"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pb-5 pt-[30px] md:py-[50px]">
        <p className="mb-[10px] text-lg font-medium text-dark-blue">
          Nominal Top Up
        </p>
        <div className="flex flex-wrap gap-4 lg:gap-[30px]">
          {nominals.map((nominal) => (
            <NominalItem
              key={nominal._id}
              _id={nominal._id}
              coinQuantity={nominal.coinQuantity}
              coinName={nominal.coinName}
              price={nominal.price}
              onChange={() => onNominalItemChange(nominal)}
            />
          ))}
        </div>
      </div>
      <div className="pb-5 md:pb-[50px]">
        <p className="mb-[10px] text-lg font-medium text-dark-blue">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="flex flex-wrap gap-4 lg:gap-[30px]">
            {payments.map((payment) => {
              return payment.banks.map((bank) => (
                <PaymentItem
                  key={bank._id}
                  bankID={bank._id}
                  type={payment.type}
                  name={bank.bankName}
                  onChange={() => onPaymentItemChange(payment, bank)}
                />
              ));
            })}
          </div>
        </fieldset>
      </div>
      <div className="flex flex-col pb-[50px]">
        <Label htmlFor="bankAccount" className="mb-[10px]">
          Bank Account Name
        </Label>
        <Input
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          className="sm:max-w-[437px]"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <Button
        variant="primary"
        type="button"
        className="w-full font-medium sm:w-[170px]"
        onClick={onSubmit}
      >
        Continue
      </Button>
    </>
  );
}
