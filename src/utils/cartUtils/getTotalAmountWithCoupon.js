export const getTotalAmountWithCoupon = (coupon, totalAmount) => {
  if (coupon) {
    return coupon === "OFF100"
      ? parseInt(totalAmount - 100)
      : parseInt(totalAmount - totalAmount * 0.1);
  }
  return parseInt(totalAmount);
};
