const dsConfigBase = [
  {
    name: 'damisparks/base',
    rules: {
      'antfu/top-level-function': 'off',
      'curly': ['error', 'all'], // Including if blocks with a single statement
      'node/prefer-global/process': 'off',
      'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],
      'pnpm/json-enforce-catalog': 'off', // Disable pnpm catalog enforcement for library packages
      'pnpm/yaml-enforce-settings': 'off', // Disable pnpm workspace settings enforcement for library packages
      'style/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'style/function-call-spacing': ['error', 'never'],
      'style/no-tabs': ['error', { allowIndentationTabs: true }],
      'style/quote-props': ['error', 'consistent'],
      'style/space-before-function-paren': ['error', 'always'],
      'ts/no-unused-vars': ['error', {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
      }],
    },
  },
]

export default dsConfigBase
