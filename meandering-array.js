//Solution for the popular FizzBuzz question made for Honeypot.io

function meanderingArray(unsorted) {
    let sorted = [];
    let clonnedArr = [...unsorted];
    console.log(clonnedArr)
    for (let i = 0; i < clonnedArr.length; i++) {
      if (clonnedArr.length >2) {
        let max = Math.max(...clonnedArr)
      console.log(max)
      let min = Math.min(...clonnedArr)
      console.log(min)
      clonnedArr.splice(clonnedArr.indexOf(max), 1)
      clonnedArr.splice(clonnedArr.indexOf(min), 1)
      sorted.push(max)
      sorted.push(min)
      } else {
        sorted.push(clonnedArr[0])
      }
      
    }
  return sorted
}