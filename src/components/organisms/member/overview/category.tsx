import { ReactNode } from "react";

import { formatValueToCurrency } from "@/utils/currency";

interface CategoryProps {
  children: ReactNode;
  price: number;
  Icon: any;
}

export function Category({ children, price, Icon }: CategoryProps) {
  return (
    <div className="flex-1 pb-4 lg:pb-0">
      <div className="rounded-2xl bg-white p-[30px]">
        <div className="mb-6 flex items-center gap-x-3">
          <Icon className="h-[60px] w-[60px]" />
          <p className="text-base font-normal text-dark-blue">{children}</p>
        </div>
        <div>
          <p className="mb-1 text-sm text-gray">Total Spent</p>
          <p className=" text-2xl font-medium text-dark-blue">
            {formatValueToCurrency(price)}
          </p>
        </div>
      </div>
    </div>
  );
}
