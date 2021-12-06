module.exports = {
  root: true,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: {
    project: ['./tsconfig.eslint.json'],
  },
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'no-console': 'off',
    'import/prefer-default-export': 'off',
  },
};
