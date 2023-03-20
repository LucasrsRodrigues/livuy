import { addDays, startOfWeek, subDays } from "date-fns";

function getArrayDate() {
  let arrayData = [];


  // const lastWeek = startOfWeek(subDays(new Date(), 7))

  // for (let i = 0; i < 7; i++) {
  //   const date = addDays(lastWeek, i);
  //   arrayData.push(date);
  // }

  const startWeek = startOfWeek(new Date());

  for (let i = 0; i < 7; i++) {
    const date = addDays(startWeek, i);
    arrayData.push(date);
  }

  return arrayData;
}


export { getArrayDate }