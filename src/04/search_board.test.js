const searchBoard = require('./search_board');

describe('#searchBoard', () => {
  it('returns whether string is on the board', () => {
    const board = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ];

    expect(searchBoard(board, 'ABCCED')).toBe(true);
    expect(searchBoard(board, 'SEE')).toBe(true);
    expect(searchBoard(board, 'ABCB')).toBe(false);
  });
});
