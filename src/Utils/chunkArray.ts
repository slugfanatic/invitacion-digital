export function chunkArray(
  array: any[] | null | undefined,
  chunkSize: number
): any[] {
  if (array == null) {
    return [];
  }

  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
