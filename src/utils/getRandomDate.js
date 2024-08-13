import getParsedMonth from "./getParsedMonth";

const getRandomDate = () => {
  let date = new Date(Date.now());
  date = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }).split(",");

  let parsedTime = date[1];
  let parsedDate = `${getParsedMonth(Number(date[0].split("/")[0]) - 1)} ${
    date[0].split("/")[1]
  }, ${date[0].split("/")[2]}`;

  return { parsedDate, parsedTime };
};

export default getRandomDate;
