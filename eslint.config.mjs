import { damisparks } from './index.mjs'

export default damisparks(
  {},
  // Disable pnpm catalog enforcement for this library package only
  // This config is not exported to consumers, so it only affects this repo
  {
    files: ['package.json', 'pnpm-workspace.yaml'],
    rules: {
      'pnpm/json-enforce-catalog': 'off',
    },
  },
)
