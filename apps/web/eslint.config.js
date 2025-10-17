import { reactConfig } from "@repo/eslint-config/react.config.js";  // Extend from the React base config

/**
 * ESLint configuration for the Node package.
 *
 * @type {import("eslint").Linter.Config[]}
 */
const reactPackageConfig = [
  ...reactConfig,  // Extend the React base config
];

export default reactPackageConfig;