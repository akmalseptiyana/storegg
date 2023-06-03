import currency from "currency.js";

export function currecyToIDR(value: any) {
  return currency(value, {
    symbol: "Rp ",
    decimal: ",",
    separator: ".",
    precision: 0,
  });
}

export const formatValueToCurrency = (value: number | null | undefined) => {
  return currecyToIDR(value).format();
};
