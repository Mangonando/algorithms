// "Introduce a little anarchy. Upset the established order and everything becomes chaos…" – Joker

// "The city needs you, Batman! The Kings and Queens are being held for ransom and our only lead is a package we just received from the Joker: half a pack of cards, a jumble of numbers and letters, and a smile emoji. We have an hour... can you find him?" – Gotham City PD

// Task
// Help Gotham City PD decode the puzzle below. If all the letters of the Joker's name are encoded in the string of cards, return true. If not, return false. Note the input is a string of shuffled cards i.e. "6s5s4cAs4s2c7s..." and the name can be found in any order.

// Card-letter correspondance
//  Card | Letter
// ------+--------
//   Jc  |   J
//   7s  |   O
//   5s  |   K
//   As  |   E
//   9c  |   R

function whySoSerious(str) {
  let correspondance = ["Jc", "7s", "5s", "As", "9c"];
  const decodedResult = [];
  for (let card of correspondance) {
    console.log(card);
    if (str.includes(card)) {
      decodedResult.push(1);
    } else {
      decodedResult.push(0);
    }
  }
  if (decodedResult.includes(0)) {
    return false;
  } else {
    return true;
  }
}
