import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfu-config.mjs'
import dsConfigBase from './rules/ds-config-base.mjs'
import dsConfigVue from './rules/ds-config-vue.mjs'

const damisparks = (options, ...configs) => {
  return antfu(
    // @antfu/eslint-config options must be passed as the first argument
    {
      ...antfuOptions,
      ...options,
    },
    // Additional flat configs can be passed as the second argument
    dsConfigBase,
    ...configs,
  )
}

const vue = dsConfigVue

// Lazy-load tailwind config - only import the module when user actually uses tailwind
// This avoids requiring eslint-plugin-better-tailwindcss for users who don't use it
// The tailwind export is a function that returns a promise resolving to the config array
// Users need to await it when using: ...(await tailwind())
const tailwind = async () => {
  const getTailwindConfig = (await import('./rules/ds-config-tailwind.mjs')).default
  return await getTailwindConfig()
}

export { damisparks, vue, tailwind }
