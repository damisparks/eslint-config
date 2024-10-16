const dsConfigVue = [
  {
    name: 'damisparks/vue',
    files: ['**/*.vue'],
    rules: {
      'vue/block-order': ['error', { order: ['script', 'template', 'style'] }],
      'vue/max-attributes-per-line': ['error', {
        singleline: { max: 3 },
        multiline: { max: 1 },
      }],
      'vue/prop-name-casing': ['error', 'camelCase'],
      'vue/multi-word-component-names': 'warn',
    },
  },
]
export default dsConfigVue
