import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import { Button } from "@/components/atoms/button";
import { ButtonTab } from "./button-tab";
import { getMemberTransactions } from "@/services/member";
import { formatValueToCurrency } from "@/utils/currency";
import { cn } from "@/utils/classnames";
import { HistroyTransactionTypes } from "@/services/types";

export function TransactionsContent() {
  const [total, setTotal] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [tab, setTab] = useState("all");

  const getMemberTransactionAPI = useCallback(
    async (value: string) => {
      const response = await getMemberTransactions(value);

      if (response.error) {
        return toast.error(response.message);
      } else {
        setTotal(response.data.total);
        setTransactions(response.data.data);
      }
    },
    [getMemberTransactions]
  );

  useEffect(() => {
    getMemberTransactionAPI("all");
  }, []);

  const onTabClick = (value: string) => {
    setTab(value);
    getMemberTransactionAPI(value);
  };
  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pl-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          My Transactions
        </h2>
        <div className="mb-[30px]">
          <p className="mb-3 text-lg text-gray">You’ve spent</p>
          <h3 className="text-[42px] font-medium text-dark-blue">
            {formatValueToCurrency(total)}
          </h3>
        </div>
        <div className="mb-5 mt-[30px]">
          <div>
            <div className="flex items-center gap-x-[18px]">
              <ButtonTab
                onClick={() => onTabClick("all")}
                title="All Trx"
                active={tab === "all"}
              />
              <ButtonTab
                onClick={() => onTabClick("success")}
                title="Success"
                active={tab === "success"}
              />
              <ButtonTab
                onClick={() => onTabClick("pending")}
                title="Pending"
                active={tab === "pending"}
              />
              <ButtonTab
                onClick={() => onTabClick("failed")}
                title="Failed"
                active={tab === "failed"}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[1047px] overflow-auto rounded-2xl bg-white px-[30px] py-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[335px]">Game</TableHead>
                  <TableHead className="text-center">Item</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction: HistroyTransactionTypes) => (
                  <TableRow key={transaction._id}>
                    <TableCell className="flex items-center gap-x-4">
                      <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
                        <Image
                          src={`${IMAGE_URL}/${transaction.historyVoucherTopup.thumbnail}`}
                          alt=""
                          width={80}
                          height={60}
                          unoptimized
                        />
                      </figure>
                      <div className="my-[10px]">
                        <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                          {transaction.historyVoucherTopup.gameName}
                        </p>
                        <p className=" text-start text-xs font-normal text-gray">
                          {transaction.historyVoucherTopup.category}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <p className="font-medium text-dark-blue">{`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <p className="font-medium text-dark-blue">
                        {formatValueToCurrency(transaction.value)}
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-x-[6px]">
                        <span
                          className={cn("block h-[6px] w-[6px] rounded-full", {
                            "bg-[#FEBD57]": transaction.status === "pending",
                            "bg-[#1ABC9C]": transaction.status === "success",
                            "bg-[#FE5761]": transaction.status === "failed",
                          })}
                        ></span>
                        <p className="font-medium text-dark-blue">
                          {transaction.status}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Link href={`/member/transactions/${transaction._id}`}>
                        <Button
                          variant="secondary"
                          className="h-10 w-28 text-sm"
                        >
                          Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </main>
  );
}
