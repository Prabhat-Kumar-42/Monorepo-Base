// eslint-config/react.config.js
import { baseConfig } from "@repo/eslint-config/base.config.js";  // Extend from the shared base config
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

/**
 * ESLint configuration for React applications.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const reactConfig = [
  ...baseConfig,  // Extend the shared base config

  {
    extends: [
      pluginReact.configs.flat.recommended,  // React specific linting rules
    ],
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,  // Service worker globals (if needed)
        ...globals.browser,        // Browser globals (e.g., `window`, `document`)
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,  // React hooks linting rules
    },
    settings: {
      react: { version: "detect" },  // Automatically detect React version
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,  // React Hooks linting rules
      "react/react-in-jsx-scope": "off",  // No need to import React in JSX scope (React 17+)
    },
  },
];
