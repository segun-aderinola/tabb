module.exports = {
    root: true,
    env: {
      node: true,
      browser: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
    //   '@vue/typescript/recommended'
    ],
    parserOptions: {
      ecmaVersion: 2020,
      parser: '@babel/eslint-parser',
      requireConfigFile: false
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      "no-undef": "off",
      "vue/no-unused-components": "off"
    }
  }
  