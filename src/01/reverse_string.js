function reverseString(str) {
  str = str.toString();
  if (str.length <= 1) return str;

  const midIdx = Math.floor(str.length / 2);

  return reverseString(str.substring(midIdx)) +
         reverseString(str.substring(0, midIdx));
}

module.exports = reverseString;
