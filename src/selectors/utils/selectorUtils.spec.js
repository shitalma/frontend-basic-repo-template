import areStatesEqualGenerator from './selectorUtils';

describe('selector utils', () => {
  it('should return true if all selectors return same value for both prev and next state selections', () => {
    const s1 = s => s.a;

    const s2 = s => s.b;

    const next = { a: 'a', b: 'b' };

    const prev = { a: 'a', b: 'b' };

    expect(areStatesEqualGenerator(s1, s2)(next, prev)).toBe(true);
  });

  it('should return false if any selectors return different values for prev and next state selections', () => {
    const s1 = s => s.a;

    const s2 = s => s.b;

    const next = { a: 'a', b: 'b' };

    const prev = { a: 'b', b: 'b' };

    expect(areStatesEqualGenerator(s1, s2)(next, prev)).toBe(false);
  });
});
