# checkPalindrome() is the method for checking palindromes and 
# prints some pretty outputs to show the user the results!
def checkPalindrome(title, input):
    # Use Python string array magic to read the string
    # backwards by 1 step >> assign to reverseString
    reverse = input[::-1]

    # Compare with original >> assign to isPalindrome
    isPalindrome = input == reverse

    # The aforementioned "pretty" outputs 
    print(f"\n {title}")
    print(f"'{input}' {'✔️  is' if isPalindrome else '❌ is not'} a palindrome!")
    print(f"Proof\t: {input} {'=' if isPalindrome else '!'}= {reverse}")

# Get user input
inputString = str(input("Please input a word (it can even be a sentence!) :\n"))
# Then we use the checkPalindrome() method
checkPalindrome("Plain Text Comparison +--------------", inputString)
# (OPTIONAL: What if the user inputs Caps?)
# We lowercase the input, lmao
checkPalindrome("Lowercased Comparison +--------------", inputString.lower())
