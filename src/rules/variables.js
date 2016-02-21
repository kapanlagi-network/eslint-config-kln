/**
 *
 */
export default {
  rules: {
    'init-declarations': [2, 'always'],
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow': [2, {
      builtinGlobals: true,
      hoist: 'all',
      allow: [
        'resolve', 'reject', 'error', 'done', 'cb', 'callback', 'result', 'next',
      ],
    }],
    'no-shadow-restricted-names': 2,
    'no-undef': [2, { typeof: true }],
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-vars': [2, {
      vars: 'all',
      varsIgnorePattern: '[iI]gnored',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
    'no-use-before-define': [2, { functions: false, classes: false }],
  },
}
