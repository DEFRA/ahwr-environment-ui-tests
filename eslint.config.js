import neostandard from 'neostandard'
import wdio from 'eslint-plugin-wdio'

const wdioRecommended = wdio.configs['flat/recommended']

export default [
  {
    ignores: ['allure-results/', 'allure-report/', 'docker/']
  },
  ...neostandard({
    env: ['node'],
    noJsx: true,
    noStyle: true
  }),
  {
    plugins: wdioRecommended.plugins,
    languageOptions: {
      globals: wdioRecommended.languageOptions.globals
    },
    rules: {
      ...wdioRecommended.rules,
      // no-floating-promise is type-aware and needs the typescript-eslint
      // project service, which this JS-only repo does not configure
      'wdio/no-floating-promise': 'off',
      'no-console': 'error'
    }
  }
]
