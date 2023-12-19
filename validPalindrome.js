/**
 * Function to check if a given string is a valid palindrome.
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if the string is a valid palindrome, false otherwise.
 */
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Use two pointers to check if the string is a palindrome
    let left = 0;
    let right = cleanedStr.length - 1;

    while (left < right) {
        // If characters at the pointers are not equal, it's not a palindrome
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false;
        }

        // Move the pointers towards the center
        left++;
        right--;
    }

    // If the loop completes without returning false, it's a palindrome
    return true;
}

// Example usage:
const inputString = "A man, a plan, a canal, Panama!";
const result = isPalindrome(inputString);

// Output the result
console.log(result); // true
