export default {
  testEnvironment: 'jest-environment-node',
  transform: {
    '\\.[jt]s?$': 'babel-jest',
    transformIgnorePatterns: ['/node_modules/**/*'],
  },
};
