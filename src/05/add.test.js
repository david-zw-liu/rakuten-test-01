const add = require('./add');

describe('#add', () => {
  it('returns sum of two number', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(5, -10)).toBe(-5);
    expect(add(12, 3)).toBe(15)
  });
});
