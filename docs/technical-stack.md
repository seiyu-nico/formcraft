# 技術スタック

FormCraftで採用する技術スタックとその選定理由。

## ビルドツール

**Vite**

- 高速な開発サーバー起動
- HMR（Hot Module Replacement）が高速
- TypeScript、React、CSSのビルドをデフォルトでサポート
- ライブラリモードでの出力が容易
- Rollupベースで本番ビルドも最適化

## テストフレームワーク

**Vitest**

- Viteとの統合が優れている
- Jest互換のAPI
- 高速なテスト実行
- TypeScriptのサポートが標準
- ESMネイティブ対応

## CSS戦略

**Tailwind CSS**

- ユーティリティファーストで柔軟なスタイリング
- カスタマイズが容易
- Tree-shakingによる小さなバンドルサイズ
- デザインシステムの構築に適している

## バリデーション

**関数ベース + オプションアダプター**

### 基本方針

ユーザーが自由にバリデーション関数を実装できる柔軟な設計。

```tsx
<TextInput
  name="email"
  validate={(value) => {
    if (!value) return "必須です";
    if (!value.includes("@")) return "無効なメール";
    return undefined; // エラーなし
  }}
/>
```

### オプションアダプター

Zodなどのバリデーションライブラリ用のアダプターを提供。

```tsx
import { zodValidator } from '@challtech/formcraft/validators';
import { z } from 'zod';

<TextInput
  validate={zodValidator(z.string().email())}
/>
```

**メリット:**
- ライブラリの依存が軽量
- ユーザーが好きなバリデーションライブラリを使える
- カスタムバリデーションも簡単
