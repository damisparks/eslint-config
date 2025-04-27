import antfu from '@antfu/eslint-config'
import antfuOptions from './rules/antfuConfig.mjs'
import dsConfigBase from './rules/dsConfigBase.mjs'
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

export { damisparks, vue }
