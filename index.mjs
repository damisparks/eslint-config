import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfu-config.mjs'
import dsConfigBase from './rules/ds-config-base.mjs'
import dsConfigVue from './rules/ds-config-vue.mjs'
import dsConfigTailwind from './rules/ds-config-tailwind.mjs'

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

export { damisparks, vue, tailwind }
