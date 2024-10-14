const dsConfigBase = [
  {
    name: 'damisparks/base',
    rules: {
      'antfu/top-level-function': 'off',
      'node/prefer-global/process': 'off',
      'style/function-call-spacing': ['error', 'never'],
      'style/no-tabs': ['error', { allowIndentationTabs: true }],
    },
  },
]

export default dsConfigBase
