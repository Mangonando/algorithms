function getMin(s) {
    let counter = 0;
      for (let i = 0; i < s.length; i++) {
          if (s[i] == '(') {
              counter++
          } else {
              counter--
          }
      }
      if (s.charAt(s.length -1) === '(') {
          counter -= 2
      }
    return Math.abs(counter)
  }