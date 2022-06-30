def checkPalindrome(title, input):
    reverse = input[::-1]
    isPalindrome = input == reverse

    print(f"\n {title}")
    print(f"'{input}' {'✔️  is' if isPalindrome else '❌ is not'} a palindrome!")
    print(f"Proof\t: {input} {'=' if isPalindrome else '!'}= {reverse}")

inputString = str(input("Please input a word (it can even be a sentence!) :\n"))

checkPalindrome("Plain Text Comparison +--------------", inputString)
checkPalindrome("Lowercased Comparison +--------------", inputString.lower())
