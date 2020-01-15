const log = require("./helper");

function reverseWords(str) {
  // Go for it
  let strSplit = str.split(" ");
  let splittedStr = strSplit.map(word => [...word].reverse().join(""));
  let reversed = splittedStr.join(" ");
  log(reversed);
  return reversed;
}

reverseWords("The dog is black");
