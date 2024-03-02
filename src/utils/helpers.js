export const formatPrice = (number) => {
  return new Intl.NumberFormat("en_US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = () => {};
