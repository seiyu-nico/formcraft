# パッケージ公開設定

npmパッケージとして公開するための設定。

## package.json設定

### 出力形式

```json
{
  "name": "@formcraft/core",
  "version": "0.0.1",
  "description": "React form builder inspired by Laravel Filament",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    },
    "./validators": {
      "import": "./dist/validators/index.js",
      "require": "./dist/validators/index.cjs",
      "types": "./dist/validators/index.d.ts"
    }
  },
  "files": [
    "dist"
  ]
}
```

### フィールドの説明

- **main**: CommonJS用のエントリーポイント
- **module**: ESM用のエントリーポイント
- **types**: TypeScript型定義ファイル
- **exports**: Node.js 12+で使用される新しいエントリーポイント設定
- **files**: npm公開時に含めるファイル（distディレクトリのみ）

### Peer Dependencies

ユーザーのプロジェクトにReactがインストールされていることを前提とする。

```json
{
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

### サイドエフェクト

Tree-shakingの最適化のため、サイドエフェクトのあるファイルを明示的に指定。

```json
{
  "sideEffects": [
    "**/*.css"
  ]
}
```

Tailwind CSSファイルはサイドエフェクトとして扱われるため、配列で指定。

### スクリプト

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "lint": "eslint src --ext .ts,.tsx",
    "lint:fix": "eslint src --ext .ts,.tsx --fix",
    "format": "prettier --write \"src/**/*.{ts,tsx}\"",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "prepublishOnly": "npm run build"
  }
}
```

## Viteライブラリモード設定

`vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        validators: resolve(__dirname, 'src/validators/index.ts'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'js' : 'cjs';
        return `${entryName}.${ext}`;
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
```

### 必要なパッケージ

```bash
npm install -D vite @vitejs/plugin-react vite-plugin-dts
```

## .npmignore

distディレクトリのみを公開するため、`.npmignore`は不要（`package.json`の`files`フィールドで制御）。

ただし、`.gitignore`には以下を追加：

```
node_modules/
dist/
.storybook-static/
coverage/
.env
.DS_Store
```

## ドキュメント戦略

### README.md

- インストール方法
- 基本的な使い方
- 簡単なサンプルコード
- ライセンス情報

### APIドキュメント

**TypeDoc** を使用して自動生成。

```bash
npm install -D typedoc
```

`typedoc.json`:

```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs/api",
  "exclude": ["**/*.test.ts", "**/*.stories.tsx"]
}
```

スクリプト追加:

```json
{
  "scripts": {
    "docs": "typedoc"
  }
}
```

### Storybook

コンポーネントのビジュアルドキュメントとして使用。

オンラインでデプロイ可能なプラットフォーム:
- **Chromatic** - Storybookチーム公式
- **Vercel** - 静的サイトホスティング
- **GitHub Pages** - 無料ホスティング

デプロイスクリプト例（GitHub Pages）:

```json
{
  "scripts": {
    "deploy-storybook": "storybook-to-ghpages"
  }
}
```
