module.exports = {
  extends: ["airbnb-typescript"],
  env: {
    browser: true,
  },
  parserOptions: {
    "project": ["./tsconfig.json"]
  },
  plugins: [
    "react",
    "react-hooks",
    "import",
    "prettier",
  ],
  rules: {
    "react/jsx-filename-extension": "off",
    "react/jsx-first-prop-new-line": [2, 'multiline'],
    "react/jsx-tag-spacing": [2, {"beforeSelfClosing": "always"}],
    'react/jsx-max-props-per-line': [2, {'maximum': 1}],
    "no-redeclare": "off",
    "react/jsx-closing-bracket-location": "warn",
    "@typescript-eslint/no-redeclare": 0,
    'import/no-unresolved': [0, {caseSensitiveStrict: true}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-one-expression-per-line': 2,
    'max-len': [1, {'code': 144}],
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/no-use-before-define': ["off"],
    '@typescript-eslint/no-unused-expressions': ["warn"],
    '@typescript-eslint/no-unused-vars': ["warn"],
    "object-curly-spacing": "off",
    '@typescript-eslint/object-curly-spacing': ["warn", "never"],
    "indent": "off",
    '@typescript-eslint/indent': ["warn", 4],
    '@typescript-eslint/comma-dangle': ["warn"],
    '@typescript-eslint/quotes': ["warn"],
    '@typescript-eslint/naming-convention': ["warn", {selector: 'default', leadingUnderscore: 'allow', format: ['camelCase', 'PascalCase', 'UPPER_CASE']}],
    '@typescript-eslint/semi': ["warn"],
  }
};
