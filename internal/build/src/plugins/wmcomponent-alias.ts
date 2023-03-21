import { PKG_NAME, PKG_PREFIX } from '@wmcomponent/build-constants'

import type { Plugin } from 'rollup'

export function WmComponentAlias(): Plugin {
  const mainStyle = 'main-style'
  const sourceMainStyle = `${PKG_PREFIX}/${mainStyle}` as const
  const bundleMainStyle = `${PKG_NAME}/${mainStyle}` as const

  return {
    name: 'wmcomponent-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceMainStyle)) return
      return {
        id: id.replaceAll(sourceMainStyle, bundleMainStyle),
        external: 'absolute',
      }
    },
  }
}
