function searchBoard(board, text) {
  if (text.length === 0) return false;

  const traverse = function (position, charIdx, passedCell = []) {
    if (passedCell.some(({ row, col }) => position.row === row && position.col === col)) return false;
    if (charIdx === text.length) return true;
  
    passedCell.push(position);
    const { row, col } = position;
    const char = text.charAt(charIdx);

    // up 1 cell
    if (board[row + 1] && board[row + 1][col] === char &&
      traverse({ row: row + 1, col }, charIdx + 1, [...passedCell])) {
      return true;
    }

    // down 1 cell
    if (board[row - 1] && board[row - 1][col] === char &&
      traverse({ row: row - 1, col }, charIdx + 1, [...passedCell])) {
     return true;
    }

    // right 1 cell
    if (board[row][col + 1] === char &&
      traverse({ row, col: col + 1 }, charIdx + 1, [...passedCell])) {
      return true;
    }

    // left 1 cell
    if (board[row][col - 1] === char &&
      traverse({ row, col: col - 1 }, charIdx + 1, [...passedCell])) {
      return true;
    }
  
    return false;
  }

  const startChar = text.charAt(0);
  for(let row = 0; row < board.length; row++) {
    for(let col = 0; col < board[row].length; col++) {
      if (board[row][col] === startChar) {
        if (traverse({ row, col }, 1)) return true;
      }
    }
  }

  return false;
}

module.exports = searchBoard;
