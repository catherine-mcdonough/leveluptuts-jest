import { hello, add, removeSNames } from './App';

console.log(hello());

describe('hello', () => {
  it('should output hello', () => {
    expect(hello()).toBe('Hello');
  });
});

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(2, 2)).toBe(4);
    expect(add(12, 2)).toBe(14);
    expect(add(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(add(2, '2')).toBe(null);
  })
  it('should not add objects', () => {
    expect(add(2, {})).toBe(null);
  })
  it('should not add objects', () => {
    expect(add(2, [])).toBe(null);
  })
})

describe('removeSNames', () => {
  it('should remove all s names', () => {
    const names = ['Scott', 'Courtney', 'Steve'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).not.toContain('Steve');
  });
  it('should not remove other names', () => {
    const names = ['Scott', 'Courtney', 'Wes'];
    expect(removeSNames(names)).toContain('Courtney');
    expect(removeSNames(names)).toContain('Wes');
  });
  it('should account for case', () => {
    const names = ['Scott', 'Courtney', 'Wes', 'scott'];
    expect(removeSNames(names)).not.toContain('scott');
    expect(removeSNames(names)).not.toContain('Scott');

  });
})