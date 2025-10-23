const helloDevOps = require('../src/index');

test('retorna saudação correta', () => {
  expect(helloDevOps()).toBe("Hello, DevOps!");
});
