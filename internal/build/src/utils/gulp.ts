import { buildRoot } from '@wmcomponent/build-utils'// 自定义每个task的nameexport 
import { run } from './process'
import type { TaskFunction } from 'gulp'

/** * 子进程 * child_process.spawn(command[, args][, options]) * command <string> 要运行的命令。 * args <string[]> 字符串参数列表。 * options <Object> *  - cwd <string> | <URL> 子进程的当前工作目录 *  - stdio <Array> | <string> 子进程的标准输入输出配置。'inherit'：通过相应的标准输入输出流传入/传出父进程 * - shell <boolean> | <string> 如果是 true，则在 shell 内运行 command。 在 Unix 上使用 '/bin/sh'，在 Windows 上使用    process.env.ComSpec。 可以将不同的 shell 指定为字符串。 请参阅 shell 的要求和默认的 Windows shell。 默认值: false （没有 shell）x */
export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

// 执行方法  
export const runTask = (name: string) =>
  withTaskName(`shellTask:${name}`, () =>
    run(`pnpm run start ${name}`, buildRoot)
  )
