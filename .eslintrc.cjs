module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    './node_modules/standard/eslintrc.json',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: { 
    react: { version: '18.2' },
    'import/resolver': {
      alias: {
        map: [
          [['@', './src']], // Configura alias '@' para que apunte a './src'
        ],
        extensions: ['.js', '.jsx', '.json']
      }
    }
  },
  plugins: [
    'react',
    'import',
    'react-refresh'
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true }
    ],
    'import/no-absolute-path': 'off',
  }
}
