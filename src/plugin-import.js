/**
 *
 */
export default {
  plugins: [
    'import',
  ],
  rules: {
    'import/no-unresolved': [2, { commonjs: true }],
    'import/named': 2,
    'import/default': 2,
    'import/namespace': 2,
    'import/export': 2,
    'import/no-named-as-default': 2,
    'import/no-commonjs': 2,
    'import/no-amd': 2,
    'import/imports-first': [2, 'absolute-first'],
    'import/no-duplicates': 2,
  },
}
