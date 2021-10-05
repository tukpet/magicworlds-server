module.exports = {
     env: { jest: true, node: true },
     parser: '@typescript-eslint/parser', // Specifies the ESLint parser
     extends: [
       'plugin:@typescript-eslint/recommended',
       'prettier',
       'plugin:prettier/recommended',
       'plugin:import/errors',
       'plugin:import/warnings',
       'plugin:import/typescript',
     ],
     parserOptions: {
       ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
       sourceType: 'module', // Allows for the use of imports
     },
     plugins: ['import'],
     rules: {
       '@typescript-eslint/ban-ts-comment': 'off',
       'import/no-default-export': 'error',

       // Disable these from eslint-plugin-import as they have issues with @typescript-eslint
       // https://github.com/typescript-eslint/typescript-eslint/blob/f335c504bcf75623d2d671e2e784b047e5e186b9/docs/getting-started/linting/FAQ.md#eslint-plugin-import
       'import/named': 'off',
       'import/namespace': 'off',
       'import/default': 'off',
       'import/no-named-as-default-member': 'off',
       // The following rules do not have equivalent checks in TypeScript
       'import/no-named-as-default': 'off',
       'import/no-cycle': 'off',
       'import/no-unused-modules': 'off',
       'import/no-deprecated': 'off',

       '@typescript-eslint/no-use-before-define': ['off'],
       '@typescript-eslint/explicit-function-return-type': 'off',
       'prettier/prettier': ['off', { singleQuote: true }],
       camelcase: 'off',
       '@typescript-eslint/camelcase': ['off'],
       'eslint-comments/no-unlimited-disable': ['off'],
       'eslint-comments/no-unused-disable': ['off'],
       'no-console': 'warn',
       'no-undef': 'off',

       'no-shadow': 'off', // replaced by ts-eslint rule below
       '@typescript-eslint/no-shadow': 'error',
     },
     settings: {
       'import/resolver': {
         typescript: {},
         'babel-module': {},
       },
     },
   }