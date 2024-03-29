function getFormattedDate(timestamp: number): string {
  const date = new Date(timestamp);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
}

export { getFormattedDate };
