module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
      es6: true
    },
    parserOptions: {
      parser: '@typescript-eslint/parser',
      sourceType: 'module'
    },
    plugins: ['vue'],
    rules: {
        // 'no-alert': 'off',
    //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //   'no-console': 'off',
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'space-before-function-paren': [
        'error',
        'never'
      ],
      'vue/array-bracket-spacing': 'error',
      'vue/arrow-spacing': 'error',
      'vue/block-spacing': 'error',
      'vue/brace-style': 'error',
      'vue/camelcase': 'error',
      'vue/comma-dangle': 'error',
      'vue/component-name-in-template-casing': 'error',
      'vue/eqeqeq': 'error',
      'vue/key-spacing': 'error',
      'vue/match-component-file-name': 'error',
      'vue/object-curly-spacing': 'error',
   
      'vue/html-indent': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/object-curly-spacing': 'off',
      'vue/html-self-closing': 'off',
      'no-case-declarations': 'off',
      'no-prototype-builtins': 'off',
      'no-extra-semi': 'off',
      'camelcase': 'off',
      'quotes': 'off',
      "space-after-keywords": [0, "always"], // 关键字后面是否要空一格
      "prefer-const": 0,//首选const
      "prefer-spread": 0,//首选展开运算
      "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
      "comma-spacing": 0,//逗号前后的空格
      'vue/script-indent': ['error', 2, {'baseIndent': 1}]

    },
    
    overrides: [
        {
            'files': ['*.vue'],
            'rules': {
                'indent': 'off',
            }
        },
    ],
  
    extends: [
      'eslint:recommended',
      'plugin:vue/recommended',
      '@vue/standard',
      '@vue/typescript'
    ]
}