// eslint.config.js
import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'], // Adicione seus padrões de arquivo aqui
  extends: [
    'eslint:recommended',
    // Adicione suas configurações adicionais aqui
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  // Outras configurações de ESLint
});
