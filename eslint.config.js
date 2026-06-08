const spfxProfile = require('@microsoft/eslint-config-spfx/lib/flat-profiles/react');

module.exports = [
  // ui-app is a standalone Vite sub-project with its own tsconfig/toolchain (it
  // builds the vendored explorer.js); the SPFx root config must not lint it, or
  // typed linting fails since ui-app files aren't in the root tsconfig.
  { ignores: ['src/webparts/**/vendor/**', 'ui-app/**'] },
  ...spfxProfile,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json'
      }
    }
  }
];
