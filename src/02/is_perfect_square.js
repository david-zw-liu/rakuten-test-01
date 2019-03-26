function isPerfectSquare(num) {
  for(let root = 0; root <= num; root++) {
    const square = root * root;
    if (square > num) return false;
    if (num === square) return true;
  }

  return false;
}

module.exports = isPerfectSquare;
