// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const originalWarn = console.warn;
const originalError = console.error;

beforeAll(() => {
  console.warn = (...args) => {
    if (
      args[0].includes('`ReactDOMTestUtils.act` is deprecated') ||
      args[0].includes('react-dom/test-utils')
    ) {
      return;
    }
    originalWarn(...args);
  };

  console.error = (...args) => {
    if (
      args[0].includes('`ReactDOMTestUtils.act` is deprecated') ||
      args[0].includes('react-dom/test-utils')
    ) {
      return;
    }
    originalError(...args);
  };
});

afterAll(() => {
  console.warn = originalWarn;
  console.error = originalError;
});
