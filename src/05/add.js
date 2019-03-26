function add(a, b) {
  if (b === 0) return a;

  filled = a ^ b
  carry = (a & b) << 1

  return add(filled, carry);
}

module.exports = add;
