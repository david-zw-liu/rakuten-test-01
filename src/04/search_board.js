function searchBoard(board, text) {
  if (text.length === 0) return false;

  const traverse = function (position, charIdx = 0, usedCell = []) {
    const { row, col } = position;
    if (charIdx === text.length) return true;                                        // full text matched
    if (!board[row] || !board[row][col]) return false;                               // not existed cell
    if (usedCell.some((cell) => cell.row === row && cell.col === col)) return false; // cell was used

    if (board[row][col] === text[charIdx]) {
      usedCell.push(position);
      const nextCharIdx = charIdx + 1;
      return traverse({ row: row + 1, col }, nextCharIdx, [...usedCell]) || // move down cell
             traverse({ row: row - 1, col }, nextCharIdx, [...usedCell]) || // move up cell
             traverse({ row, col: col + 1 }, nextCharIdx, [...usedCell]) || // move right cell
             traverse({ row, col: col - 1 }, nextCharIdx, [...usedCell]);   // move left cell
    }

    return false;
  }

  const startChar = text.charAt(0);
  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[row].length; col++) {
      const position = { row, col };
      if (traverse(position)) return true;
    }
  }

  return false;
}

module.exports = searchBoard;
