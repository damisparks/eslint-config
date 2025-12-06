import betterTailwindcss from 'eslint-plugin-better-tailwindcss'

const dsConfigTailwind = [
  {
    name: 'damisparks/tailwind',
    plugins: {
      'better-tailwindcss': betterTailwindcss,
    },
    rules: {
      // Enforce consistent class ordering
      'better-tailwindcss/enforce-consistent-class-order': 'warn',
      // Enforce consistent line wrapping for long class strings
      'better-tailwindcss/enforce-consistent-line-wrapping': 'warn',
      // Enforce consistent spacing
      'better-tailwindcss/enforce-consistent-spacing': 'warn',
    },
  },
]

export default dsConfigTailwind

