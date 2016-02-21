/**
 *
 */
export default {
  rules: {
    'callback-return': [2, [
      'resolve', 'reject', 'error', 'done', 'cb', 'callback', 'result', 'next',
    ]],
    'global-require': 0,
    'handle-callback-err': [2, '^.*(e|E)rr'],
    'no-mixed-requires': [2, { grouping: true, allowCall: true }],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-exit': 1,
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,
  },
}
