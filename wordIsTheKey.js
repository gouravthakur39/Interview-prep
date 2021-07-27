function wordIsTheKey(str) {
  let strLowerCase = str.toLowerCase();
  const keywords = [
    "break",
    "case",
    "continue",
    "default",
    "defer",
    "else",
    "for",
    "func",
    "goto",
    "if",
    "map",
    "range",
    "return",
    "struct",
    "type",
    "var",
  ];

  keywordsLength = keywords.length;

  for (let i = 0; i < keywordsLength; i++) {
    if (keywords[i] == strLowerCase) {
      return `${str} is a keyword`;
    }
  }
  return `${str} is not a keyword`;
}

console.log(wordIsTheKey("defer"));
console.log(wordIsTheKey("While"));
