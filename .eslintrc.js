module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
