/**
 *
 */
import mergeWith from 'lodash.mergewith'
import bestPractises from './rules/best-practices'
import possibleErrors from './rules/possible-errors'
import stylisticIssues from './rules/stylistic-issues'
import variables from './rules/variables'
import environmentES6 from './rules/environment-es6'
import environmentNode from './rules/environment-node'
import pluginBabel from './rules/plugin-babel'
import pluginReact from './rules/plugin-react'
import pluginImport from './rules/plugin-import'


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
