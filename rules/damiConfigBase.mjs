const dsConfigBase = [
  {
    name: 'damisparks/base',
    rules: {
      // TODO Review these rules
      'antfu/top-level-function': 'off',
      'curly': ['error', 'all'],
      'node/prefer-global/process': 'off',
      'style/function-call-spacing': ['error', 'never'],
    },
  },
]

export default dsConfigBase
