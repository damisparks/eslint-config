// Lazy-load the plugin to avoid requiring it for users who don't use this preset
// This function is called when the config is actually used
export default async function getTailwindConfig() {
  let betterTailwindcss
  try {
    betterTailwindcss = (await import('eslint-plugin-better-tailwindcss')).default
  } catch (error) {
    if (error.code === 'ERR_MODULE_NOT_FOUND' || error.message.includes('eslint-plugin-better-tailwindcss')) {
      throw new Error(
        'The tailwind preset requires eslint-plugin-better-tailwindcss to be installed. ' +
        'Please install it: pnpm add -D eslint-plugin-better-tailwindcss'
      )
    }
    throw error
  }

  return [
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
}

