// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

export function between(a: number, b: number): number[] {
  let arr: number[] = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}
