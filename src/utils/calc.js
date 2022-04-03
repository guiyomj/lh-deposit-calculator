export const calcMax = ({ monthFee, limit, rate }) => {
  const maxDeposit = Math.floor((((monthFee * limit) / rate) * 12) / 100000) * 100000;
  const minMonthFee = (maxDeposit * rate) / 12;

  return { deposit: maxDeposit, monthFee: minMonthFee };
};

export const calcMin = ({ deposit, rate }) => {
  const maxMonthFee = (Math.floor((deposit * rate) / 3) / 100000) * 25000;

  return maxMonthFee;
};
