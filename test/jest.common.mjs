import path from 'path'
import {fileURLToPath} from 'url'
const __dirname = fileURLToPath(import.meta.url)

export default {
  rootDir: path.join(__dirname, '../..'),
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jest-environment-jsdom',
}
