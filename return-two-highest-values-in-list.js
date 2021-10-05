// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

function twoHighest(arr) {
  let highestNum = 0;
  let secondHighestNum = 0;
  if (arr.length <= 1) return arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highestNum) {
      secondHighestNum = highestNum;
      highestNum = arr[i];
    } else if (arr[i] > secondHighestNum && arr[i] < highestNum) {
      secondHighestNum = arr[i];
    }
  }
  return [highestNum, secondHighestNum];
}
