// For this one, I'll be using this sentence vvv
var testString = "Lorem Ipsum is simply dummy text";
// Feel free to change it ^^^

// I'm just using an arrow function for defining
// repeatCuller() because I'm used to it and it's
// faster to type.
repeatCuller = (inString) => {
  // Character bank object to map all of the characters to
  const charBank = {};

  // for loop going through all of the characters in the string
  for (const char of inString) {
    // skip the iteration if it's a space
    if (char == " ") continue;
    // Increment the current value or add to 0 if there is no record
    charBank[char] = (charBank[char] || 0) + 1;
  }
  // Filter out non-repeating characters and return the array
  return Object.entries(charBank).filter((c) => c[1] > 1);
};

// Call the method and print the results
console.log(repeatCuller(testString));
