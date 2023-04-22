export const formatDate = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.toLocaleString("default", { month: "long" });
  // add 0 to single digit date
  const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();
  return `${month} ${day}, ${year}`;
};
