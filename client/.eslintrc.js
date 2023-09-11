module.exports ={
  "root": true,
  "parser":"@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
  },
  ignorePatterns: ['.eslintrc.js'],
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:react/jsx-runtime"
  ],
}