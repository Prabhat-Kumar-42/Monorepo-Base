import { expoConfig } from "@repo/eslint-config/expo.config.js";  // Extend from the Expo base config

/**
 * ESLint configuration for the Node package.
 *
 * @type {import("eslint").Linter.Config[]}
 */
const expoPackageConfig = [
  ...expoConfig,  // Extend the Expo base config
];

export default expoPackageConfig;