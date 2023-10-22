/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  modulePaths: ['<rootDir>/src/'],

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "<rootDir>/src/**/Tests/**/*.[jt]s?(x)"
  ],

  // The directory where Jest should store its cached dependency information
  cacheDirectory: "<rootDir>/var/cache/jest",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  slowTestThreshold: 1, // seconds
  testTimeout: 1000, // milliseconds
};

module.exports = config;
