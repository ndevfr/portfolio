export const getYear = (date: string | number) => {
  if (date.toString().indexOf(".")) {
    return date.toString().split(".")[0];
  } else {
    return date;
  }
};
