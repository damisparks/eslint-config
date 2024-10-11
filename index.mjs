import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuConfig.mjs'
import dsConfigBase from './rules/damiConfigBase.mjs'
import dsConfigTailwind from './rules/dsConfigTailwind.mjs'
import dsConfigVue from './rules/dsConfigVue.mjs'

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
const tailwind = dsConfigTailwind

export { damisparks, tailwind, vue }
