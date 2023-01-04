function countHours(year, holidays) {
  // Check if the date belongs to working week
  const isWorkingDay = (dayOfTheWeek) => dayOfTheWeek <= 5 && dayOfTheWeek >= 1;

  // Transform to full date
  const transformToDate = (date) => new Date(date.concat(`/${year}`));

  return (
    holidays
      .map((day) => transformToDate(day).getDay())
      .filter((day) => isWorkingDay(day)).length * 2
  );
}

console.log(countHours(1993, ["02/20", "10/02", "04/21", "01/01"])); // 4
console.log(countHours(2023, ["01/06", "04/01", "12/25"])); // 4
console.log(
  countHours(1985, [
    "01/01",
    "01/06",
    "02/02",
    "02/17",
    "02/28",
    "06/03",
    "12/06",
    "12/25",
  ])
); // 10
