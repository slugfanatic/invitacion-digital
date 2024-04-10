export function formatDate(dateToFormat: Date): string {
  const Day = dateToFormat.getDate();
  const Month = dateToFormat.toLocaleString("default", { month: "long" });
  const Year = dateToFormat.getFullYear();

  return `${Day} de ${Month} de ${Year}`;
}
