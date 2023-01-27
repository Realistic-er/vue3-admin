module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "linebreak-style": [0,"unix"],
    "no-else-return":0,
    "no-restricted-syntax":0,
    'import/no-cycle':0,
    'no-lonely-if':0,
    'import/prefer-default-export':0,
    'arrow-body-style':0,
    'vuejs-accessibility/click-events-have-key-events':0,
  },
};
