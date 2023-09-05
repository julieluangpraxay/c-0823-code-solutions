/* exported isVowel */
function isVowel(char) {
  if (
    char === 'A' ||
    char === 'a' ||
    char === 'E' ||
    char === 'e' ||
    char === 'I' ||
    char === 'i' ||
    char === 'O' ||
    char === 'o' ||
    char === 'U' ||
    char === 'u'
  ) {
    return true;
  }
  return false;
}
