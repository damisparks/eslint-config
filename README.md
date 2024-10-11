# @damisparks/eslint-config

This is my personal ESLint config preset. It is based on the [`@antfu/eslint-config`](https://github.com/antfu/eslint-config). I made some tweaks to it to fit my personal preferences.

> [!NOTE]
> This config is rewritten to the new [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Features

Some of the features of this config are inherited from the `@antfu/eslint-config`:

- Out of the box support for TypeScript, Vue, React, etc.
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new) for better organisation and composition.
- Using [ESLint Stylistic](https://github.com/eslint-stylistic/eslint-stylistic) to provide a consistent code style and enfore preconfigured style.
- and many more...

My personal tweaks include:

- Vue

  - Enforce **vue/block-order** to `['script', 'template', 'style']`
  - Enforce maximum number of attributes per line (`3` for singleline, `1` for multiline)
  - Explicitly enforce **vue/prop-name-casing** to `camelCase`, even though it is the default.

- Tailwind CSS (Optional): Enforce best practices and consistent usage of [Tailwind CSS](https://tailwindcss.com/) via `eslint-plugin-tailwindcss`.
- ... and other minor tweaks.

## Installation

Install the `@damisparks/eslint-config` package in your project:

```bash
pnpm add -D eslint @damisparks/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import damisparks from '@damisparks/eslint-config'

export default damisparks()
```

### Basic Usage

Using the default configuration without any arguments activates the `@antfu/eslint-config` preset.

- Autodetects [Vue](https://vuejs.org) and [TypeScript](https://www.typescriptlang.org).
- Enables ESLint Stylistic style rules

### Additional Presets

Optionally, these extra options allow you to use the **Vue** and **TailwindCSS** presets:

```js
// eslint.config.mjs
import { damisparks, tailwind, vue } from '@damisparks/eslint-config'

export default damisparks(
  {}, // @antfu/eslint-config options must come first.
  vue,
  tailwind,
  {
    // other ESLint Flat config rules object
  }
)
```

### NPM Scripts

Add the below to lint commands to your `package.json` script section:

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

## VS Code Support

in VS Code, to enable support for ESLint Flat configuration, edit your `.vscode/settings.json` file and add the following:

```json
{
  // Required in vscode-eslint < v3.0.10 only
  "eslint.experimental.useFlatConfig": true
}
```

<!-- ## IDE Support (auto fix on save) -->

## License

[MIT](/LICENSE) License © 2024-present [Dami Sparks](https://www.damisparks.com)
