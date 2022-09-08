/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
import path from 'path'
import {fileURLToPath} from 'url'
const __dirname = fileURLToPath(import.meta.url)

export default {
  rootDir: path.join(__dirname, '..'),
  collectCoverageFrom: ['app'],
  projects: ['./test/jest.lint.mjs', './test/jest.bloemium.mjs'],
}
