const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('returnRole() should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('Name', 1, 'email@email.com', 100)
})

test('Can get office number from getOffice()', () => {
  const testValue = 1;
  const e = new Manager('Name', 1, 'email@email.com', testValue);
  expect(e.returnManagerOfficeNum()).toBe(testValue);
})