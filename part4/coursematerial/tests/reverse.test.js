const { test } = require('node:test');
const assert = require('assert');

const reverse = require('../utils/for_testing').reverse;

test('reverse of a', () => {
  const result = reverse('a');

  assert.strictEqual(result, 'a');
});

test('reverse of react', () => {
  const result = reverse('react');

  assert.strictEqual(result, 'tcaer');
});

test('reverse off saippuakauppias', () => {
  const result = reverse('saippuakauppias');

  assert.strictEqual(result, 'saippuakauppias');
});

// test('reverse of react', () => {
//   const result = reverse('react');

//   assert.strictEqual(result, 'tkaer');
// });
