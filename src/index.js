/**
 *
 */
import mergeWith from 'lodash.mergewith'
import bestPractises from './best-practices'
import possibleErrors from './possible-errors'
import stylisticIssues from './stylistic-issues'
import variables from './variables'
import environmentES6 from './environment-es6'
import environmentNode from './environment-node'
import pluginBabel from './plugin-babel'
import pluginReact from './plugin-react'
import pluginImport from './plugin-import'


/**
 *
 */
function merge(...args) {
  return mergeWith(...args, (dest, src, key) => {
    if ((key === 'rules' || key === 'plugins') && Array.isArray(dest)) {
      return dest.concat(src)
    }
    return void 0
  })
}


/**
 *
 */
const config = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}


/**
 *
 */
merge(config, bestPractises)
merge(config, possibleErrors)
merge(config, stylisticIssues)
merge(config, variables)
merge(config, environmentES6)
merge(config, environmentNode)
merge(config, pluginBabel)
merge(config, pluginReact)
merge(config, pluginImport)


/**
 *
 */
export default config
