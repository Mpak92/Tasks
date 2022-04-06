module.exports = {
  env: {
    commonjs: true,
    es6: true,
    browser: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'object-curly-newline': [1, {
      minProperties: 1,
    }],
    'object-property-newline': [1, {
      allowAllPropertiesOnSameLine: false,
    }],
    'consistent-return': 0,
    'arrow-body-style': [0],
    'no-new-func': 0,
    'multiline-ternary': [1, 'always'],
    'import/no-extraneous-dependencies': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': 0,
    'no-trailing-spaces': ['warn'],
    'guard-for-in:': 0,
    'no-debugger': 1,
    'function-paren-newline': ['error', 'multiline'],
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'no-underscore-dangle': 0,
    // Вернуть обратно
    'no-unused-vars': 1,
    'no-console': 1,
    'max-len': [1],
    'no-restricted-syntax': [0],
    'guard-for-in': [0],
  },
};
