# 開発環境

FormCraftの開発環境設定とツールチェーン。

## TypeScript設定

`tsconfig.json` の推奨設定：

```json
{
  "compilerOptions": {
    "strict": true,
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM"],
    "jsx": "react-jsx",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist", "**/*.test.tsx", "**/*.test.ts", "**/*.stories.tsx"]
}
```

### 設定の説明

- **strict: true** - すべての厳格な型チェックを有効化
- **target: ES2020** - モダンブラウザ対応の出力
- **module: ESNext** - 最新のESモジュール構文
- **moduleResolution: bundler** - Viteなどのバンドラー向け解決
- **lib: ["ES2020", "DOM"]** - ES2020とDOM APIの型定義
- **jsx: react-jsx** - React 17+の新しいJSX変換

## ESLint + Prettier

### ESLint設定

`.eslintrc.json`:

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "react", "react-hooks"],
  "rules": {
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

### Prettier設定

`.prettierrc`:

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2
}
```

### 必要なパッケージ

```bash
npm install -D \
  eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-config-prettier \
  prettier
```

## Husky + lint-staged

コミット前の自動チェック設定。

### セットアップ

```bash
npm install -D husky lint-staged
npx husky init
```

### lint-staged設定

`package.json` に追加：

```json
{
  "lint-staged": {
    "*.{ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

### Huskyフック

`.husky/pre-commit`:

```bash
#!/bin/sh
npx lint-staged
```

### オプション: Conventional Commits

`.husky/commit-msg`:

```bash
#!/bin/sh
npx --no -- commitlint --edit $1
```

`commitlint.config.js`:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

必要なパッケージ:

```bash
npm install -D @commitlint/cli @commitlint/config-conventional
```
