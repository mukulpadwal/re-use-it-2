const getParsedMonth = (month) => {
  let parsedMonth = "";
  switch (month) {
    case 0:
      parsedMonth = "January";
      break;
    case 1:
      parsedMonth = "February";
      break;
    case 2:
      parsedMonth = "March";
      break;
    case 3:
      parsedMonth = "April";
      break;
    case 4:
      parsedMonth = "May";
      break;
    case 5:
      parsedMonth = "June";
      break;
    case 6:
      parsedMonth = "July";
      break;
    case 7:
      parsedMonth = "August";
      break;
    case 8:
      parsedMonth = "September";
      break;
    case 9:
      parsedMonth = "October";
      break;
    case 10:
      parsedMonth = "November";
      break;
    case 11:
      parsedMonth = "December";
      break;
    default:
      parsedMonth = "";
      break;
  }

  return parsedMonth;
};

export default getParsedMonth;
