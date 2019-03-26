const insertInterval = require('./insert_interval');

describe('#insertInterval', () => {
  it('returns inserted intervals', () => {
    expect(
      insertInterval([[1, 3], [6, 9]], [2, 5])
    ).toEqual([[1, 5], [6, 9]]);

    expect(
      insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 9])
    ).toEqual([[1, 2], [3, 10], [12, 16]]);

    expect(
      insertInterval([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [0, 9])
    ).toEqual([[0, 10], [12, 16]]);

    expect(
      insertInterval([[1, 3]], [0, 4])
    ).toEqual([[0, 4]]);

    expect(
      insertInterval([[0, 5]], [3, 9])
    ).toEqual([[0, 9]])

    expect(
      insertInterval([[1, 5]], [6,8])
    ).toEqual([[1, 5],[6, 8]])

    expect(
      insertInterval([[1, 5]], [0, 0])
    ).toEqual([[0, 0], [1, 5]])

    expect(
      insertInterval([[0,5],[9,12]], [7,16])
    ).toEqual([[0,5],[7,16]])
  });
});
