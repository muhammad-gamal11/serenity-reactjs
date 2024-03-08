export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type]);
  if (type === "colors") {
    unique = unique.flat();
  }
  //   console.log(unique);
  return ["all", ...new Set(unique)];
};
