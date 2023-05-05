const Employee = require('../lib/Employee');

test('Can instantiate new employee instance', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');
});

test('Can set name from constructor arguments', () => {
  const name = 'Jeff';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('Can set id from constructor arguments', () => {
  const testValue = 100;
  const e = new Employee('id', testValue);
  expect(e.id).toBe(testValue);
});

test('Can set email from constructor argument', () => {
  const testValue = 'email@email.com';
  const e = new Employee('email', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('Can get name from returnName()', () => {
  const testValue = 'Jeff';
  const e = new Employee(testValue);
  expect(e.returnName()).toBe(testValue);
})

test('Can get id from returnId()', () => {
  const testValue = 100;
  const e = new Employee('id', testValue);
  expect(e.returnId()).toBe(testValue);
})

test('Can get email from returnEmail()', () => {
  const testValue = 'email@email.com';
  const e = new Employee('email', 1, testValue);
  expect(e.returnEmail()).toBe(testValue);
});

test('returnRole() should return \"Employee\"', () => {
  const testValue = 'Employee';
  const e = new Employee('Jeff', 1, 'email@email.com');
  expect(e.returnRole()).toBe(testValue);
})