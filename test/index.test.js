const helloDevOps = require('../src/site-novadeploy/helloDevOps');

test('retorna saudação correta', () => {
  expect(helloDevOps()).toBe("Hello, DevOps!");
});
