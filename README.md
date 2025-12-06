# @damisparks/eslint-config

This is my personal ESLint config preset. It is based on the [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). I made some tweaks to fit my personal preferences.

> [!NOTE]
> This config is rewritten to the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

Some features of this config are inherited from the `@antfu/eslint-config`:

- Out-of-the-box support for TypeScript, Vue, React, etc.
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for better organization and composition.
- Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) to provide a consistent code style and enforce preconfigured style.
- And many more...

My personal tweaks include:

- General:
  - Force use of curly braces on control statements.
  - Disable `antfu/top-level-function` to allow arrow syntax on top level functions.

- Vue:
  - Enforce **vue/block-order** to `['script', 'template', 'style']`.
  - Enforce a maximum number of attributes per line (`5` for single-line, `1` for multi-line).
  - Explicitly enforce **vue/prop-name-casing** to `camelCase`, even though it is the default.

- ... and other minor tweaks.

## Installation

Install the `@damisparks/eslint-config` package in your project:

```bash
pnpm add -D eslint @damisparks/eslint-config
```

Create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import damisparks from '@damisparks/eslint-config'

export default damisparks()
```

### Usage

Using the default configuration without any arguments activates the `@antfu/eslint-config` preset.

- Autodetects [Vue](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org).
- Enables ESLint Stylistic style rules.

### Optional Presets

This config also provides optional rules or presets for **Vue** and **Tailwind CSS**:

```js
// eslint.config.mjs
import { damisparks, vue, tailwind } from '@damisparks/eslint-config'

export default damisparks(
  {}, // @antfu/eslint-config options must come first.
  vue, // Optional Vue-specific rules
  // other ESLint Flat config rules object
)
```

#### Vue Preset

The `vue` preset includes:
- Block order enforcement: `['script', 'template', 'style']`
- Maximum attributes per line: `5` for single-line, `1` for multi-line
- Prop name casing: `camelCase`

#### Tailwind Preset

The `tailwind` preset uses `eslint-plugin-better-tailwindcss` to enforce:
- Consistent class ordering
- Consistent line wrapping for long class strings
- Consistent spacing

> [!NOTE]
> To use the Tailwind preset, you must install `eslint-plugin-better-tailwindcss` as a peer dependency:
> ```bash
> pnpm add -D eslint-plugin-better-tailwindcss
> ```
>
> The `tailwind` export is a function that returns a promise. Since ESLint flat config supports top-level await, use it like this:
> ```js
> // eslint.config.mjs
> import { damisparks, vue, tailwind } from '@damisparks/eslint-config'
>
> export default damisparks(
>   {}, // @antfu/eslint-config options must come first.
>   vue, // Optional Vue-specific rules
>   ...(await tailwind()), // Optional Tailwind CSS rules (lazy-loaded)
> )
> ```

### Nuxt Integration

This package provides custom rules that can be used with [Nuxt](https://nuxt.com). The recommended approach to use this config is via the Nuxt module.

1. Run the following command to add the `@nuxt/eslint` module to your project:

```bash
npx nuxi module add eslint
```

2. In your `nuxt.config.ts`, set the `standalone` option to `false`:

```ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  eslint: {
    config: {
      standalone: false // <---
    }
  }
})
```

3. Integrate the `@damisparks/eslint-config` in your `eslint.config.mjs`:

```js
import { damisparks, vue } from '@damisparks/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().prepend(
  damisparks(
    {}, // @antfu/eslint-config options must come first.
    vue, // Optional
  ),
)
```

### NPM Scripts

Add the below lint commands to your `package.json` script section:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code Support

If you use VS Code, you should manually enable support for ESLint flat config.

1. Install the [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

2. Add the following settings to your `.vscode/settings.json`:

```json
{
  // Enable the ESLint flat config support
  "eslint.experimental.useFlatConfig": true
}
```

> [!NOTE]
> For VS Code ESLint extension versions `v3.0.10` and above, you can use `"eslint.useFlatConfig": true` instead of the experimental flag.

## License

[MIT](/LICENSE) License © 2024-present [Dami Sparks](https://github.com/damisparks)
