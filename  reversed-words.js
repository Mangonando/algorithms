// Complete the solution so that it reverses all of the words within the string passed in.

function reverseWords(str){
    let sentenceReverse = str.split(' ').reverse().join(' ')
    return sentenceReverse
  }