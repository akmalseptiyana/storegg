import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/atoms/table";

export function OverviewTable() {
  return (
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
        <TableRow>
          <TableCell className="flex items-center gap-x-4">
            <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
              <Image
                src="/images/Thumbnail-3.png"
                alt=""
                width={80}
                height={60}
              />
            </figure>
            <div className="my-[10px]">
              <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                Mobile Legends: The New Battle 2021
              </p>
              <p className="text-start text-xs font-normal text-gray">
                Desktop
              </p>
            </div>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">200 Gold</p>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">Rp 200.000</p>
          </TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-x-[6px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-[#FEBD57]"></span>
              <p className="font-medium text-dark-blue">Pending</p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center gap-x-4">
            <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
              <Image
                src="/images/Thumbnail-2.png"
                alt=""
                width={80}
                height={60}
              />
            </figure>
            <div className="my-[10px]">
              <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                Call of Duty:Modern
              </p>
              <p className=" text-start text-xs font-normal text-gray">
                Desktop
              </p>
            </div>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">550 Gold</p>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">Rp 740.000</p>
          </TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-x-[6px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-[#1ABC9C]"></span>
              <p className="font-medium text-dark-blue">Success</p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center gap-x-4">
            <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
              <Image
                src="/images/Thumbnail-4.png"
                alt=""
                width={80}
                height={60}
              />
            </figure>
            <div className="my-[10px]">
              <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                Clash of Clans
              </p>
              <p className=" text-start text-xs font-normal text-gray">
                Mobile
              </p>
            </div>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">100 Gold</p>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">Rp 120.000</p>
          </TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-x-[6px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-[#FE5761]"></span>
              <p className="font-medium text-dark-blue">Failed</p>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="flex items-center gap-x-4">
            <figure className="relative h-[60px] w-20 overflow-hidden rounded-2xl">
              <Image
                src="/images/Thumbnail-5.png"
                alt=""
                width={80}
                height={60}
              />
            </figure>
            <div className="my-[10px]">
              <p className="w-[135px] overflow-hidden text-ellipsis  whitespace-nowrap  text-start font-medium text-dark-blue">
                The Royal Game
              </p>
              <p className=" text-start text-xs font-normal text-gray">
                Mobile
              </p>
            </div>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">225 Gold</p>
          </TableCell>
          <TableCell className="text-center">
            <p className="font-medium text-dark-blue">Rp 290.000</p>
          </TableCell>
          <TableCell className="text-center">
            <div className="flex items-center justify-center gap-x-[6px]">
              <span className="block h-[6px] w-[6px] rounded-full bg-[#FEBD57]"></span>
              <p className="font-medium text-dark-blue">Pending</p>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
