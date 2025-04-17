import { defineConfig } from "eslint/config";
import tsPlugin from "@typescript-eslint/eslint-plugin";
export default defineConfig([
    {
        plugins: {
            "@typescript-eslint": tsPlugin,
        },
        rules: {
            "semi": "error",
            "prefer-const": "error",
            "no-var": "warn",
            "no-console": "warn",
            "no-duplicate-imports": "error",
            "@typescript-eslint/no-unused-vars": "warn"
        },
    },
]);
