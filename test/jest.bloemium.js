import jestCommon from './jest.common.mjs'

export default {
  ...jestCommon,
  displayName: 'ingtoday',
  testMatch: ['**/app/__tests__/**/*.ts'],
}
