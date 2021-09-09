// Function that gets an array of numbers and returns true if there is a number which appears twice or more and returns false if all the elements in the array are different.

var containsDuplicate = function (nums) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] == nums[j]) {
        return true;
      }
    }
  }
  return false;
};
