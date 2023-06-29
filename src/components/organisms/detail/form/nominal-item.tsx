import { cn } from "@/utils/classnames";
import { formatValueToCurrency } from "@/utils/currency";

interface NominalItemProps {
  _id: string;
  coinQuantity: number;
  coinName: string;
  price: number;
  onChange: () => void;
}

export function NominalItem({
  _id,
  coinQuantity,
  coinName,
  price,
  onChange,
}: NominalItemProps) {
  return (
    <label
      className="w-full sm:max-w-[260px]"
      htmlFor={_id}
      onChange={onChange}
    >
      <input
        className="peer hidden"
        type="radio"
        id={_id}
        name="topup"
        value={_id}
      />
      <div
        className={cn(
          "group h-[131px] cursor-pointer rounded-[26px] bg-[#F9FAFF] p-[30px] transition-all duration-100",
          "peer-checked:border-2 peer-checked:border-secondary peer-checked:bg-secondary/[0.05]"
        )}
      >
        <div className="flex items-center justify-between">
          <p className="m-0 text-3xl font-light text-dark-blue">
            <span className="font-medium">{coinQuantity}</span>
            {coinName}
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
  );
}
