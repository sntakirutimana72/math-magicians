import operate from './operate';

describe('Test operations', () => {
  it('Plus', () => {
    expect(operate('5', '2', '+')).toBe('7');
    expect(operate('5', '-2', '+')).toBe('3');
  });
  it('Minus', () => {
    expect(operate('5', '2', '-')).toBe('3');
    expect(operate('2', '5', '-')).toBe('-3');
  });
  it('Times', () => {
    expect(operate('5', '2', 'x')).toBe('10');
    expect(operate('-4', '7', 'x')).toBe('-28');
  });
  it('Divide', () => {
    expect(operate('5', '2', '÷')).toBe('2.5');
    expect(operate('-2', '4', '÷')).toBe('-0.5');
    expect(operate('-2', '0', '÷')).toBe("Can't divide by 0.");
  });
  it('Modulus', () => {
    expect(operate('5', '2', '%')).toBe('1');
    expect(operate('4', '2', '%')).toBe('0');
    expect(operate('2', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  it('Unknown Operator', () => {
    expect(() => { operate('5', '2', '*') }).toThrow();
    expect(() => { operate('4', '2', '/') }).toThrow();
    expect(() => { operate('2', '0', '?') }).toThrow();
  });
});
