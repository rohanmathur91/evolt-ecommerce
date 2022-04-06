export const getTotalAmountWithCoupon = (coupon, totalAmount) => {
  if (coupon) {
    return coupon === "OFF100"
      ? totalAmount - 100
      : totalAmount - totalAmount * 0.1;
  }
  return totalAmount;
};
