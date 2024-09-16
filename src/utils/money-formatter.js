import currency from "currency.js";

export const moneyFormatter = (money) => {
  return currency(money).format();
};
