import jestCommon from './jest.common.mjs'

export default {
  ...jestCommon,
  displayName: 'bloemium',
  testMatch: ['<rootDir>/app/**/__tests__/**/*.ts'],
}
