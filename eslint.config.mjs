import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ['next'],
    rules: {
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-console': 'warn', // Warn on console statements
      'no-unused-imports': 'warn', // Warn on unused imports
      'react/react-in-jsx-scope': 'off', // Next.js doesn't require React to be in scope
      'react/no-unescaped-entities': 'off', // Allow unescaped entities in JSX
      'import/no-anonymous-default-export': 'off', // Allow anonymous default exports
    },
  }),
];

export default eslintConfig;
