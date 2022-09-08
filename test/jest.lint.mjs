import path from 'path'
import {fileURLToPath} from 'url'
const __dirname = fileURLToPath(import.meta.url)

export default {
  rootDir: path.join(__dirname, '../..'),
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: ['<rootDir>/**/*.ts'],
}
