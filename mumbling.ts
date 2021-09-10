export function accum(s: string): string {
  return s
    .split("")
    .map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index))
    .join("-");
}
