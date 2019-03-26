const isPerfectSquare = require('./is_perfect_square');

describe('#isPerfectSquare', () => {
  it('returns whether num is perfect square', () => {
    expect(isPerfectSquare(0)).toBe(true);
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(14)).toBe(false);
  });
});
