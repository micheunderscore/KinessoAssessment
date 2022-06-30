var testString = "Lorem Ipsum is simply dummy text";

repeatCuller = (inString) => {
  let charBank = {};

  for (const char of inString) {
    charBank[char] = (charBank[char] || 0) + 1;
  }

  return Object.keys(charBank).join("");
};

console.log(
  `Original sentence:
  ${testString}
  
Sentence without repeating characters:
  ${repeatCuller(testString)}`
);
