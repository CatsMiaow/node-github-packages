import { isObject, pre, line } from './base';

test('isObject', () => {
  expect(isObject(12)).toBeFalsy();
  expect(isObject([])).toBeFalsy();
  expect(isObject({})).toBeTruthy();
});

test('template', () => {
  expect(pre`
    1
    2
    3
  `).not.toMatch(/\s{2,}/);

  expect(line`
    a
    b
    c
  `).not.toMatch(/\s{2,}|\n/);
});
