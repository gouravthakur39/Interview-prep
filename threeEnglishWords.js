function threeEnglishWords(word) {
  let splitWord = word.split(" ");
  for (let i = 0; i < splitWord[0].split("").length; i++) {
    let char = splitWord[0].split("")[i];
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      console.log("*");
    } else {
      console.log(char);
    }
  }
  for (let i = 0; i < splitWord[1].split("").length; i++) {
    let char = splitWord[1].split("")[i];
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      console.log(char);
    } else {
      console.log("@");
    }
  }
  for (let i = 0; i < splitWord[1].split("").length; i++) {
    let char = splitWord[2].split("")[i];
    console.log(char.toUpperCase());
  }
}

console.log(threeEnglishWords("how are you"));
