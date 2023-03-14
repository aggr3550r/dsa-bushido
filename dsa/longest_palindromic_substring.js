const isPalindrome = (string) => {
  let n = string.length;
  let pivot = Math.floor(n / 2);

  for (let i = 0, j = n - i - 1; i < pivot; i++, j--) {
    if (string[i] !== string[j]) return false;
  }

  return true;
};

const longestPalindromicSubstring = (string) => {
  let n = string.length;

  let maxLength = 0;
  let maxString = "";

  for (let i = 0; i < n - 1; i++) {
    for (let j = n; j > maxLength; j--) {
      if (string[i] == string[j]) {
        const subStrng = string.substring(i, j + 1 || -1);
        const isPalindromeSubstr = isPalindrome(subStrng);
        if (isPalindromeSubstr) {
          maxString = subStrng;
          maxLength = j - i + 1;
        }
      }
    }
  }

  return maxString;
};

console.log(longestPalindromicSubstring("cbbd"));
