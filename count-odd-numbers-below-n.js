// Given a number n, return the number of positive odd numbers below n, EASY!

// oddCount(7) //=> 3, i.e [1, 3, 5]
// oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]

//Solution

function oddCount(n) {
    let counter = 0;
     if (n % 2 !== 0){
      counter = (n - 1 ) / 2
    } else {
      counter = (n) / 2
    }
    return counter
  }

// Better solution

  function oddCount(n){
    return Math.floor(n/2);
  }