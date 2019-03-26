const reverseString = require('./reverse_string');

describe('#reverseString', () => {
  it('returns reversed string', () => {
    expect(reverseString('abcde')).toBe('edcba');
    expect(reverseString('1234567890')).toBe('0987654321');
  });
})
