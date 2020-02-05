const log = require("./helper");
function pigIt(str) {
  //Code here
  // 0. Collect the position of the punctuation mark into a variable first
  // 1. Split the words by space
  // 2. Push into an array
  // 3. Loop through array
  // 4. Take each element in the array and pass into the converting function
  // 5. converting function does the rest

  // const regex = /[^a-zA-Z0-9]+$/;
  // const regMatch = str.match(regex)
  // console.log(regMatch);
  // const regMatchIndex = regMatch.index;
  // const punctuation = regMatch[0];
  const punctuations = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  const wordToAdd = "ay";
  const wordsSeparated = str.split(" ");
  // console.log(wordsSeparated);
  let theWord;
  let newWord;
  let wordWithoutFirstLetter;
  let punctuation;
  let wordIndex;
  let newWordArray = [];
  const individualWord = wordsSeparated.map(word => {
    if (!punctuations.includes(word)) {
      theWord = word[0];
      wordWithoutFirstLetter = word.substring(1);
      newWord = wordWithoutFirstLetter + theWord + wordToAdd;
      newWordArray.push(newWord);
    }

    if (punctuations.includes(word)) {
      wordIndex = wordsSeparated.join(" ").indexOf(word);
      punctuation = word;
    }
  });
  const solution = newWordArray.join(" ");
  // console.log(wordIndex)
  if (punctuation === undefined) {
    return solution.slice(0, wordIndex);
  } else {
    const result = solution + " " + punctuation;
    return result;
  }
}

log(pigIt("Pig latin is cool"));
log(pigIt("Hello world !"));
