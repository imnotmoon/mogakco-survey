module.exports = {
  env: { browser: true, es2020: true, node: true, },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint'],
  rules: {
    "prettier/prettier": ["warn"],
    "linebreak-style": ["error", "unix"],
    "prefer-const": "error",
    "no-var": "error",
    "no-console": "off",
    "no-useless-escape": "off",
    "arrow-body-style": ["error", "as-needed"],
    "no-param-reassign": ["warn", { "props": true, "ignorePropertyModificationsFor": ["state"] }],
    "curly": ["error", "multi-line"],
    "generator-star-spacing": "off",
    "prefer-promise-reject-errors": "off",
    "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
    "react/jsx-no-duplicate-props": ["error", { "ignoreCase": true }],
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-deprecated": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-is-mounted": "error",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-render-return": "error",
    "react/self-closing-comp": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off"
  },
}
