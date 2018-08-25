module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    server: true,
  },
  rules: {
  },
  overrides: [
    {
      parser: 'typescript-eslint-parser',
      files: [
        '**/*.ts'
      ],
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off"
      }
    },
    {
      files: [
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js'
      ],
      parserOptions: {
        ecmaVersion: 2015,
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      }
    }
  ]
};
