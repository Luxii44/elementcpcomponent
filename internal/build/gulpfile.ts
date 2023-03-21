import path from 'path'
import { mkdir,copyFile } from 'fs/promises'
import { copy } from 'fs-extra'
import type { CopyOptions } from 'fs-extra'
import { parallel, series } from 'gulp'
// import type { TaskFunction } from 'gulp'
import { run, runTask, withTaskName } from './src'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@wmcomponent/build-utils'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'
import { buildConfig } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true } as CopyOptions)
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}
export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'main-style/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}
export default series(
  withTaskName("clean", () => run('pnpm run clean')),//clean是babeljs的函数
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),//createOutput是rollupjs的函数

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    // runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/main-style build')
      ),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from "./src"