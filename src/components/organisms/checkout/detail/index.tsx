import { useEffect, useState } from "react";

import { formatValueToCurrency } from "@/utils/currency";

export function CheckoutDetail() {
  const [dataTopUp, setDataTopUp] = useState({
    _id: "",
    verifyID: "",
    nominalItem: {
      price: 0,
      coinQuantity: 0,
      coinName: "",
    },
    paymentItem: {
      payment: {
        type: "",
        _id: "",
      },
      bank: {
        bankName: "",
        name: "",
        noRekening: "",
        _id: "",
      },
    },
    bankAccountName: "",
  });

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-topup");
    const dataTopUpLocal = JSON.parse(dataFromLocal!);
    setDataTopUp(dataTopUpLocal);
  }, []);

  const itemPrice = dataTopUp.nominalItem.price;
  const tax = dataTopUp.nominalItem.price * (10 / 100);
  const totalPrice = itemPrice + tax;

  return (
    <>
      <div className="pt-[30px] md:pt-[50px]">
        <h2 className="mb-5 text-xl font-bold text-dark-blue">
          Purchase Details
        </h2>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Your Game ID{" "}
          <span className="block font-medium">{dataTopUp.verifyID}</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Order ID <span className="block font-medium">#GG001</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Item{" "}
          <span className="block font-medium">
            {dataTopUp.nominalItem.coinQuantity}{" "}
            {dataTopUp.nominalItem.coinName}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Price{" "}
          <span className="block font-medium">
            {formatValueToCurrency(itemPrice)}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Tax (10%){" "}
          <span className="block font-medium">
            {formatValueToCurrency(tax)}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Total{" "}
          <span className="block font-medium text-primary">
            {formatValueToCurrency(totalPrice)}
          </span>
        </p>
      </div>
      <div className="py-[10px] md:py-[50px]">
        <h2 className="mb-5 text-xl font-bold text-dark-blue md:flex md:items-center md:justify-between">
          Payment Informations
        </h2>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Your Account Name{" "}
          <span className="block font-medium">{dataTopUp.bankAccountName}</span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Type{" "}
          <span className="block font-medium">
            {dataTopUp.paymentItem.payment.type}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Name{" "}
          <span className="block font-medium">
            {dataTopUp.paymentItem.bank.bankName}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Account Name{" "}
          <span className="block font-medium">
            {dataTopUp.paymentItem.bank.name}
          </span>
        </p>
        <p className="mb-5 text-lg text-dark-blue md:flex md:items-center md:justify-between">
          Bank Number{" "}
          <span className="block font-medium">
            {dataTopUp.paymentItem.bank.noRekening}
          </span>
        </p>
      </div>
    </>
  );
}
