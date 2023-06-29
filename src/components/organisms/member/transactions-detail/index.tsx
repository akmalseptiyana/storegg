import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";
import Cookies from "js-cookie";

import { Divider } from "@/components/atoms/divider";
import { Button } from "@/components/atoms/button";
import { Badge } from "@/components/atoms/badge";
import { Row } from "./row";
import { getTransactionDetail } from "@/services/member";

export function TransactionsDetailContent() {
  const [transactionDetail, setTransactionDetail] = useState({
    historyVoucherTopup: {
      gameName: "",
      category: "",
      thumbnail: "",
      coinName: "",
      coinQuantity: 0,
      price: 0,
    },
    historyPayment: {
      name: "",
      type: "",
      bankName: "",
      noRekening: "",
    },
    _id: "",
    name: "",
    accountUser: "",
    status: "",
    tax: 0,
    value: 0,
  });
  const { query, isReady } = useRouter();

  const token = Cookies.get("token");
  const jwtToken = token ? atob(token) : "";

  const transactionDetailAPI = useCallback(
    async (id: string | string[] | undefined) => {
      const response = await getTransactionDetail(id, jwtToken);

      if (response.error) {
        return toast.error(response.message);
      } else {
        setTransactionDetail(response.data);
      }
    },
    [getTransactionDetail]
  );

  useEffect(() => {
    if (isReady) {
      transactionDetailAPI(query.idTrx);
    }
  }, []);

  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pr-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Details #{transactionDetail._id}
        </h2>
        <div>
          <div className="w-full max-w-[860px] overflow-auto rounded-2xl bg-white p-[30px]">
            <section className="mx-auto">
              <div className="mb-[30px] flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <div className="pr-4">
                    <figure className="relative h-[130px] w-[200px] overflow-hidden rounded-[26px]">
                      <Image
                        src={`${IMAGE_URL}/${transactionDetail.historyVoucherTopup.thumbnail}`}
                        alt=""
                        fill
                        unoptimized
                        className="object-cover"
                      />
                    </figure>
                  </div>
                  <div>
                    <p className="mb-10 text-xl font-bold text-dark-blue">
                      {transactionDetail.historyVoucherTopup.gameName}
                    </p>
                    <p className="text-gray">
                      Category: {transactionDetail.historyVoucherTopup.category}
                    </p>
                  </div>
                </div>
                <Badge variant="pending" className="h-10 w-[130px]">
                  {transactionDetail.status}
                </Badge>
              </div>
              <Divider orientation="horizontal" />
              <div className="pt-[30px]">
                <h2 className="mb-5 text-xl font-bold text-dark-blue">
                  Purchase Details
                </h2>
                <Row
                  label="Your Game ID"
                  value={transactionDetail.accountUser}
                />
                <Row label="Order ID" value={transactionDetail._id} />
                <Row
                  label="Item"
                  value={`${transactionDetail.historyVoucherTopup.coinQuantity} ${transactionDetail.historyVoucherTopup.coinName}`}
                />
                <Row
                  label="Price"
                  value={transactionDetail.historyVoucherTopup.price}
                />
                <Row label="Tax (10%)" value={transactionDetail.tax} />
                <Row
                  label="Total"
                  value={transactionDetail.value}
                  className="font-semibold text-primary"
                />
              </div>
              <div className="py-[10px]">
                <h2 className="mb-5 text-xl font-bold text-dark-blue">
                  Payment Informations
                </h2>
                <Row label="Your Account Name" value={transactionDetail.name} />
                <Row
                  label="Type"
                  value={transactionDetail.historyPayment.type}
                />
                <Row
                  label="Bank Name"
                  value={transactionDetail.historyPayment.bankName}
                />
                <Row
                  label="Bank Account Name"
                  value={transactionDetail.historyPayment.name}
                />
                <Row
                  label="Bank Number"
                  value={transactionDetail.historyPayment.noRekening}
                />
              </div>
              <div className="mt-[50px]">
                <Button variant="primary" className="w-[250px]">
                  WhatsApp ke Admin
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
