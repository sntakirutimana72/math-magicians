import calculate from './calculate';

describe('functionals', () => {
  const obj = {
    next: null,
    total: null,
    operation: null,
  };

  it('AC should reset all', () => {
    expect(calculate({
      next: '5', total: '13', operation: '+'
    }, 'AC')).toEqual({next: 0, total: null, operation: null});
  });
  it('= without next, should return {}', () => {
    expect(calculate(obj, '=')).toEqual({});
  });
  it('= without operation, should return {}', () => {
    expect(calculate({...obj, next: '3'}, '=')).toEqual({});
  });
  it('operation without input, should not be empty', () => {
    expect(calculate(obj, '+')).toEqual({operation: '+'});
  });
  it('+/- should return input * -1', () => {
    expect(calculate({next: '5'}, '+/-')).toEqual({next: '-5'});
    expect(calculate({total: '-3'}, '+/-')).toEqual({total: '3'});
  });
  it('. should return float', () => {
    expect(calculate(obj, '.')).toMatchObject({next: '0.'});
    expect(calculate({...obj, total: '3'}, '.')).toMatchObject({next: '3.', total: null});
  });
});


describe('operational', () => {
  it('Plus', () => {
    expect(calculate({
      next: '5', total: '-3', operation: '+'
    }, '=')).toEqual({next: null, total: '2', operation: null});
  });
  it('Minus', () => {
    expect(calculate({
      next: '6', total: '-2', operation: '-'
    }, '=')).toEqual({next: null, total: '-8', operation: null});
  });
  it('Times', () => {
    expect(calculate({
      next: '-2', total: '-7', operation: 'x'
    }, '=')).toEqual({next: null, total: '14', operation: null});
  });
  it('Divide', () => {
    expect(calculate({
      next: '5', total: '-2', operation: '÷'
    }, '=')).toEqual({next: null, total: '-0.4', operation: null});
    expect(calculate({
      next: '0', total: '1', operation: '÷'
    }, '=')).toEqual({next: null, total: "Can't divide by 0.", operation: null});
  });
  it('Modulo', () => {
    expect(calculate({
      next: '2', total: '4', operation: '%'
    }, '=')).toEqual({next: null, total: '0', operation: null});
    expect(calculate({
      next: '0', total: '1', operation: '%'
    }, '=')).toEqual({next: null, total: "Can't find modulo as can't divide by 0.", operation: null});
  });
});
