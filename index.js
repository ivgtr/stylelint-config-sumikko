module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-recess-order'
  ],
  syntax: 'scss',
  plugins: ['stylelint-scss', 'stylelint-order', 'stylelint-prettier'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ],
    'prettier/prettier': true,
    'order/order': [['dollar-variables', 'declarations', 'rules']],
    'color-hex-length': 'short'
  }
}
