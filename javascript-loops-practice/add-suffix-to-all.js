/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    const newWord = words[i] + suffix;
    newArray.push(newWord);
  }
  return newArray;
}
