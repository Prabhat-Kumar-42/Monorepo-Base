import { config as baseConfig } from "./base.config.js";

export const expoConfig = [
  ...baseConfig,  // Extend the base configuration
  {
    env: {
      browser: true,     // Enable browser globals (Expo uses web in addition to native)
      es2023: true,      // Enable ES2023 support
    },
    parserOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module",  // Enable module syntax for Expo
    },
    plugins: [
      "react",             // React plugin for JSX linting
      "react-hooks",       // React hooks plugin
      "react-native",      // Mobile-specific React Native linting rules
    ],
    rules: {
      "react/jsx-uses-react": "off",   // In React 17+, no need to import React explicitly
      "react/react-in-jsx-scope": "off", // For React 17+ JSX Transform
      "react-hooks/rules-of-hooks": "error", // Enforce React hooks rules
      "react-hooks/exhaustive-deps": "warn", // Ensure proper hook dependencies
      "react-native/no-unused-styles": "warn", // Warn for unused styles in React Native
      "react-native/split-platform-components": "warn", // Enforce platform-specific components (e.g., `.ios.js`, `.android.js`)
    },
  },
];
