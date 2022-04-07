export const getDate = () =>
  String(new Date()).split(" ").slice(0, 4).join(" ");
