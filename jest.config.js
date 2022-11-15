/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  verbose: true,
  projects: [
    {
      displayName: "e2e: Test as tsx-stringify a package",
      preset: "ts-jest",
      rootDir: "./e2e",
      testEnvironment: "jsdom",
      testMatch: ["<rootDir>/tests/**/*.[jt]s?(x)"],
    },
    {
      displayName: "core: Unit tests",
      preset: "ts-jest",
      rootDir: "./packages/core",
      testEnvironment: "node",
      testMatch: ["<rootDir>/tests/**/*.[jt]s?(x)"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/tsconfig-test.json" },
        ],
      },
    },
    {
      displayName: "render: Unit tests",
      preset: "ts-jest",
      rootDir: "./packages/render",
      testEnvironment: "node",
      testMatch: ["<rootDir>/tests/**/*.spec.[jt]s?(x)"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/tsconfig-test.json" },
        ],
      },
    },
    {
      displayName: "sync: Unit tests",
      preset: "ts-jest",
      rootDir: "./packages/sync",
      testEnvironment: "node",
      testMatch: ["<rootDir>/tests/**/*.[jt]s?(x)"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/tsconfig-test.json" },
        ],
      },
    },
  ],
};
module.exports = config;
