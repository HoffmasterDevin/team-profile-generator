const Intern = require('../lib/Intern');

test('Can set school from constructor', () => {
  const testValue = 'UW-Madison';
  const e = new Intern('Name', 1, 'email@email.com', testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
const testValue = 'Intern';
const e = new Intern('Name', 1, 'email@email.com', 'UW-Madison');
expect(e.returnRole()).toBe(testValue);
});

test('Can get school from getSchool()', () => {
  const testValue = "UW-Madison";
  const e = new Intern('Name', 1, 'email@email.com', testValue);
  expect(e.returnSchool()).toBe(testValue);
});