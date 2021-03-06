module.exports = {
  extends: 'airbnb',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'no-use-before-define': 0,
    'no-param-reassign': 1,
    'jsx-quotes': ['error', 'prefer-single'],
    'global-require': 0,
    'no-shadow': 0,
    'import/no-unresolved': [
      "error",
      {
        "ignore": ['~/']
      }
    ]
  }
};
