module.exports = {
  setupTestFrameworkScriptFile: './setupEnzyme.js',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js|jsx}', '!src/js/index.js'],
  coverageReporters: ['json', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  testPathIgnorePatterns: ['coverage', 'src/js/constants/'],
  coveragePathIgnorePatterns: ['src/js/constants/'],
};
