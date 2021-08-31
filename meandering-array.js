//Solution for the popular meandering array question made for Honeypot.io

function meanderingArray(unsorted) {
  const clonnedArr = [...unsorted];
  const sorted = [];
  for (let el of clonnedArr) {
    const max = Math.max(...clonnedArr);
    sorted.push(...clonnedArr.splice(clonnedArr.indexOf(max), 1));
    const min = Math.min(...clonnedArr);
    sorted.push(...clonnedArr.splice(clonnedArr.indexOf(min), 1));
    if (clonnedArr.length < 3) {
      sorted.push(clonnedArr[0]);
    }
  }
  return sorted;
}
