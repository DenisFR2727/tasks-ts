const date: Date = new Date();

// function returnNextDate(date: Date): string {
//   const currentDate: Date = new Date();
//   date.setDate(date.getDate() + 1);
//   date.getDay() === 0 || date.getDay() === 6;

//   date.setHours(9, 0, 0, 0);

//   return `${currentDate.toLocaleString().split(",").join("")} => ${date
//     .toLocaleString()
//     .split(",")
//     .join("")}`;
// }

// const res = returnNextDate(date);
// console.log(res);

function returnDateAfterDays(currentDate: Date, days: number) {
  const date = new Date(currentDate);

  while (days > 0) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      days--;
    }
  }
  return date.toLocaleString();
}
const res2 = returnDateAfterDays(date, 5);
console.log(res2);
