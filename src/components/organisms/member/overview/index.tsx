import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

import GameDesktopIcon from "@/assets/game-desktop.svg";
import GameMobileIcon from "@/assets/game-mobile.svg";
import { Category } from "./category";
import { getMemberOverview } from "@/services/member";
import { formatValueToCurrency } from "@/utils/currency";
import { cn } from "@/utils/classnames";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";
import {
  HistroyTransactionTypes,
  TopUpCategoriesTypes,
} from "@/services/types";

export function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);

  const getMemberOverviewAPI = useCallback(async () => {
    const response = await getMemberOverview();

    if (response.error) {
      return toast.error(response.message);
    } else {
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, [getMemberOverview]);

  useEffect(() => {
    getMemberOverviewAPI();
  }, []);

  const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

  return (
    <main className="relative ml-[340px] mr-auto h-full py-[50px] pr-[50px]">
      <div className="lg:pr-0">
        <h2 className="mb-[30px] text-[32px] font-bold text-dark-blue">
          Overview
        </h2>
        <div className="mb-[30px]">
          <p className="mb-3.5 text-xl font-medium text-dark-blue">
            Top Up Categories
          </p>
          <div className="max-w-[900px]">
            <div className="flex gap-x-[30px]">
              {count.map((item: TopUpCategoriesTypes) => (
                <Category
                  key={item._id}
                  price={item.value}
                  Icon={
                    item.name === "Mobile" ? GameMobileIcon : GameDesktopIcon
                  }
                >
                  Game <br /> {item.name}
                </Category>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className="mb-3.5 text-lg font-medium text-dark-blue">
            Latest Transactions
          </p>
          <div className="max-w-[900px] overflow-auto rounded-2xl bg-white px-[30px] py-5">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[335px]">Game</TableHead>
                  <TableHead className="text-center">Item</TableHead>
                  <TableHead className="text-center">Price</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.map((item: HistroyTransactionTypes) => (
                  <TableRow key={item._id}>
                    <TableCell className="flex items-center gap-x-4">
                      <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
                        <Image
                          src={`${IMAGE_URL}/${item.historyVoucherTopup.thumbnail}`}
                          alt=""
                          width={80}
                          height={60}
                          unoptimized
                        />
                      </figure>
                      <div className="my-[10px]">
                        <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                          {item.historyVoucherTopup.gameName}
                        </p>
                        <p className="text-start text-xs font-normal text-gray">
                          {item.historyVoucherTopup.category}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <p className="font-medium text-dark-blue">{`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}</p>
                    </TableCell>
                    <TableCell className="text-center">
                      <p className="font-medium text-dark-blue">
                        {formatValueToCurrency(item.value)}
                      </p>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-x-[6px]">
                        <span
                          className={cn("block h-[6px] w-[6px] rounded-full", {
                            "bg-[#FEBD57]": item.status === "pending",
                            "bg-[#1ABC9C]": item.status === "success",
                            "bg-[#FE5761]": item.status === "failed",
                          })}
                        ></span>
                        <p className="font-medium text-dark-blue">
                          {item.status}
                        </p>
                      </div>
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
