/**
 *
 */
export default {
  plugins: [
    'babel',
  ],
  rules: {
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, { before: true, after: false }],

    'new-cap': 0,
    'babel/new-cap': [2, { capIsNew: false, newIsCap: true }],

    'array-bracket-spacing': 0,
    'babel/array-bracket-spacing': [2, 'never'],

    'object-curly-spacing': 0,
    'babel/object-curly-spacing': [2, 'always', {
      objectsInObjects: true,
      arraysInObjects: true,
    }],

    'object-shorthand': 0,
    'babel/object-shorthand': [2, 'always'],

    'arrow-parens': 0,
    'babel/arrow-parens': [2, 'as-needed'],

    'babel/no-await-in-loop': 0,
  },
}
