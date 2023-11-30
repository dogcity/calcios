module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    semi: ['error', 'never'],
    'jsx-quotes': ['error', 'prefer-single'],
    'react-native/no-inline-styles': 0,
    curly: ['error', 'multi']
  },
}
