# FormCraft

> **🚧 開発中**: このプロジェクトは現在開発中です。APIは予告なく変更される可能性があります。

React form builder library inspired by Laravel Filament.

## 概要

FormCraftは、Laravel Filamentのフォームビルダーにインスパイアされた、Reactベースの宣言的フォーム構築ライブラリです。直感的なAPIで複雑なフォームを簡単に構築できます。

### 特徴

- **宣言的なAPI**: Laravel Filament風の分かりやすいビルダーパターン
- **柔軟なバリデーション**: 関数ベースで自由にカスタマイズ可能
- **TypeScript完全対応**: 型安全な開発体験
- **軽量**: 必要最小限の依存関係
- **カスタマイズ可能**: Tailwind CSSによるスタイリング

## インストール

> **⚠️ 注意**: このパッケージはまだnpmに公開されていません。現在開発中のため、以下のインストールコマンドは利用できません。

```bash
npm install @challtech/formcraft
```

### Peer Dependencies

```bash
npm install react react-dom
```

## 基本的な使い方

> **📝 注意**: 以下のコード例は将来的な使用イメージです。一部のコンポーネント（Form, Select, Checkbox）はまだ実装されていません。

```tsx
import { Form, TextInput, Select, Checkbox } from '@challtech/formcraft';

function MyForm() {
  return (
    <Form
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <TextInput
        name="name"
        label="名前"
        validate={(value) => {
          if (!value) return "名前は必須です";
          return undefined;
        }}
      />

      <TextInput
        name="email"
        label="メールアドレス"
        type="email"
        validate={(value) => {
          if (!value) return "メールアドレスは必須です";
          if (!value.includes("@")) return "無効なメールアドレスです";
          return undefined;
        }}
      />

      <Select
        name="role"
        label="役割"
        options={[
          { value: 'admin', label: '管理者' },
          { value: 'user', label: 'ユーザー' },
        ]}
      />

      <Checkbox
        name="terms"
        label="利用規約に同意する"
        validate={(value) => {
          if (!value) return "利用規約への同意が必要です";
          return undefined;
        }}
      />

      <button type="submit">送信</button>
    </Form>
  );
}
```

## バリデーション

### 関数ベース

```tsx
<TextInput
  name="username"
  validate={(value) => {
    if (!value) return "必須です";
    if (value.length < 3) return "3文字以上で入力してください";
    return undefined;
  }}
/>
```

### Zodアダプター（オプション）

> **📝 注意**: Zodアダプターはまだ実装されていません。

```tsx
import { zodValidator } from '@challtech/formcraft/validators';
import { z } from 'zod';

<TextInput
  name="email"
  validate={zodValidator(z.string().email("無効なメールアドレス"))}
/>
```

## ドキュメント

詳細なドキュメントは[こちら](./docs)をご覧ください。

- [ディレクトリ構成](./docs/directory-structure.md)
- [技術スタック](./docs/technical-stack.md)
- [開発環境](./docs/development-environment.md)
- [パッケージ公開](./docs/package-publishing.md)

## ライセンス

ISC
