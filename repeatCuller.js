// For this one, I'll be using this sentence vvv
var testString = "Lorem Ipsum is simply dummy text";
// Feel free to change it ^^^

// For the question, I'm assuming that the method needs to
// show only the first appearance of characters and remove
// any further duplicates. Spaces are also included since
// the question did not specify what qualified as a "character".

// I'm just using an arrow function for defining
// repeatCuller() because I'm used to it and it's
// faster to type.
repeatCuller = (inString) => {
  // Character bank object to map all of the characters to
  let charBank = {};
  // for loop going through all of the characters in the string
  for (const char of inString) {
    // Increment the current value or add to 0 if there is no record
    charBank[char] = (charBank[char] || 0) + 1;
  }
  // Filter out non-repeating characters and return the array
  return Object.keys(charBank).join("");
};
// Call the method and print the results
console.log(
  `Original sentence:
  ${testString}
  
Sentence without repeating characters:
  ${repeatCuller(testString)}`
);
