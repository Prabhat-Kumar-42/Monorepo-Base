import { config as baseConfig } from "./base.config.js";

export const nodeConfig = [
  ...baseConfig, // Extend the base configuration
  {
    env: {
      node: true, // Enable Node.js global variables (e.g., `__dirname`, `process`)
      es2023: true, // Enable support for ES2023 syntax
    },
    parserOptions: {
      project: "./tsconfig.json", // points to the TypeScript configuration file
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Enable support for ES modules in Node.js
    },
    extends: [
      "plugin:node/recommended", // Node.js specific linting rules
      "plugin:prettier/recommended", // Prettier integration
    ],
    rules: {
      "no-console": "warn", // Warn about console logs (adjustable depending on your needs)
      "no-process-env": "off", // Allow process.env usage (can be customized)
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables starting with `_`
      "@typescript-eslint/explicit-module-boundary-types": "off", // Optional rule to disable explicit return types for functions

      "no-restricted-syntax": [
        "error",
        {
          selector: "CallExpression[callee.name='require']",
          message: "Use import instead of require.",
        },
      ], // Enforce `import` over `require` in Node.js
    },
  },
];
