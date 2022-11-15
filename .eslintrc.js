/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: false,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./e2e/tsconfig.json",
      "./packages/common/tsconfig.json",
      "./packages/core/tsconfig.json",
      "./packages/core/tsconfig-test.json",
      "./packages/html-types/tsconfig.json",
      "./packages/render/tsconfig.json",
      "./packages/render/tsconfig-test.json",
      "./packages/sync/tsconfig.json",
      "./packages/sync/tsconfig-test.json",
      "./tsconfig-eslint.json",
    ],
  },
  plugins: ["@typescript-eslint", "prettier", "simple-import-sort"],
  rules: {
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        /**
         * we want to keep most of the defaults for this rule: https://typescript-eslint.io/rules/ban-types/
         * but this library relies on 2 tricks:
         * 1. using the `Function` type for a polymorphic variable that is either a function or a class declarations
         * 2. Use of the empty object literal type to be consistent with https://www.typescriptlang.org/docs/handbook/jsx.html#attribute-type-checking
         */
        types: {
          String: {
            message: "Use string instead",
            fixWith: "string",
          },
          Boolean: {
            message: "Use boolean instead",
            fixWith: "boolean",
          },
          Number: {
            message: "Use number instead",
            fixWith: "number",
          },
          Symbol: {
            message: "Use symbol instead",
            fixWith: "symbol",
          },
          BigInt: {
            message: "Use bigint instead",
            fixWith: "bigint",
          },
          // object typing
          Object: {
            message: [
              'The `Object` type actually means "any non-nullish value", so it is marginally better than `unknown`.',
              '- If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.',
              '- If you want a type meaning "any value", you probably want `unknown` instead.',
            ].join("\n"),
          },
        },
        extendDefaults: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  overrides: [
    {
      env: {
        "jest/globals": true,
        es2022: true,
        node: true,
      },
      extends: [
        "plugin:jest/recommended",
        "plugin:jest/style",
        "plugin:testing-library/dom",
        "plugin:jest-dom/recommended",
      ],
      files: [
        "**/tests/*.[jt]s?(x)",
        "**/__tests__/*.[jt]s?(x)",
        "**/?(*.)+.(spec|test).[jt]s?(x)",
      ],
      plugins: ["jest", "testing-library", "jest-dom"],
      settings: {
        jest: {
          version: 29,
        },
      },
    },
  ],
};
module.exports = config;
