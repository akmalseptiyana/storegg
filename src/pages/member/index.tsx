import Image from "next/image";

import GameDesktopIcon from "@/assets/game-desktop.svg";
import GameMobileIcon from "@/assets/game-mobile.svg";
import { Sidebar } from "@/components/member/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Member() {
  return (
    <section className="overflow-auto bg-[#FBFCFD]">
      <Sidebar />
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
                <div className="flex-1 pb-4 lg:pb-0">
                  <div className="rounded-2xl bg-white p-[30px]">
                    <div className="mb-6 flex items-center gap-x-3">
                      <GameDesktopIcon className="h-[60px] w-[60px]" />
                      <p className="text-base font-normal text-dark-blue">
                        Game
                        <br /> Desktop
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-gray">Total Spent</p>
                      <p className=" text-2xl font-medium text-dark-blue">
                        Rp 18.000.500
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pb-4 lg:pb-0">
                  <div className="rounded-2xl bg-white p-[30px]">
                    <div className="mb-6 flex items-center gap-x-3">
                      <GameMobileIcon className="h-[60px] w-[60px]" />
                      <p className="text-base font-normal text-dark-blue">
                        Game
                        <br /> Mobile
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-gray">Total Spent</p>
                      <p className=" text-2xl font-medium text-dark-blue">
                        Rp 8.455.000
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 pb-4 lg:pb-0">
                  <div className="rounded-2xl bg-white p-[30px]">
                    <div className="mb-6 flex items-center gap-x-3">
                      <GameDesktopIcon className="h-[60px] w-[60px]" />
                      <p className="text-base font-normal text-dark-blue">
                        Other
                        <br /> Categories
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-sm text-gray">Total Spent</p>
                      <p className=" text-2xl font-medium text-dark-blue">
                        Rp 5.000.000
                      </p>
                    </div>
                  </div>
                </div>
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
                        <p className=" text-start text-xs font-normal text-gray">
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
                        <div className="h-[6px] w-[6px] rounded-full bg-[#FE5761]"></div>
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
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
