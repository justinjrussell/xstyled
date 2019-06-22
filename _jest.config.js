module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: 'babelrc.test.js'
    }
  },
  transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*@xstyled.*).*$'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/website/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/'],
}
