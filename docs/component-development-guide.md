# コンポーネント開発ガイド

このドキュメントでは、FormCraftのフィールドコンポーネントを開発する際の手順とFilamentリファレンスの活用方法をまとめています。

## 開発手順

### 1. Filamentの参照

新しいコンポーネントを開発する前に、以下のFilamentリソースを確認します。

#### 1.1 UIデザインの確認

**Filament公式ドキュメント**を確認して、実装するコンポーネントの見た目と動作を把握します。

- URL: `https://filamentphp.com/docs/4.x/forms/{component-name}`
- 例: TextInput → `https://filamentphp.com/docs/4.x/forms/text-input`

確認ポイント：
- デフォルトの見た目（ライトモード・ダークモード）
- 各種状態（disabled, required, error など）の表示
- prefix/suffix、アイコンなどの装飾要素
- インタラクション（focus、hover など）

#### 1.2 API設計の確認

**Filamentリファレンスプロジェクト**（`.references/filament/`）でAPI設計パターンを確認します。

主な参照先：
- `packages/forms/src/Components/{ComponentName}.php` - コンポーネントのメインクラス
- `packages/forms/src/Components/Field.php` - フィールド共通機能
- `packages/forms/src/Components/Concerns/` - 共通トレイト（バリデーション、状態管理など）

確認ポイント：
- プロパティ名とメソッド名（ReactではpropsとしてTypeScript化）
- バリデーション機能の実装パターン
- 共通機能の切り出し方
- デフォルト値の設定

### 2. 型定義の作成

`src/components/fields/{ComponentName}.types.ts` を作成します。

```typescript
export interface ComponentNameProps {
  // 基本プロパティ
  name: string;
  label?: string;

  // Filamentを参考に必要なpropsを定義
  // ...
}
```

ポイント：
- Filamentのメソッド名をcamelCaseのprops名に変換
- React/TypeScriptの慣習に合わせて調整
- 共通プロパティは `src/types/field.ts` に定義

### 3. コンポーネント実装

`src/components/fields/{ComponentName}.tsx` を作成します。

実装の流れ：
1. 状態管理（useState）
2. イベントハンドラー
3. スタイリング（Tailwind CSS）
4. JSX構造

スタイリングのポイント：
- Filament公式ページのデザインを参考にする
- ライトモード/ダークモード両方に対応
- Tailwind CSS v4の`dark:`プレフィックスを使用
- カスタムカラーは `src/styles/index.css` の `@theme` で定義

### 4. Storybookストーリーの作成

`src/components/fields/{ComponentName}.stories.tsx` を作成します。

必要なストーリー例：
- Default - デフォルト状態
- With Helper Text - ヘルパーテキスト付き
- Required - 必須フィールド
- Disabled - 無効状態
- Read Only - 読み取り専用
- その他コンポーネント固有の状態

### 5. スタイル調整とテーマ対応

#### 5.1 Tailwind CSS v4の設定

`src/styles/index.css` で以下が設定済み：
```css
@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@layer theme {
  @theme {
    --color-primary-*: ...;
    --color-danger-*: ...;
  }
}
```

#### 5.2 テーマ対応クラス

ライト/ダークモード対応の例：
```tsx
<label className="text-gray-950 dark:text-white">
<input className="bg-white dark:bg-white/5">
<div className="ring-gray-950/10 dark:ring-white/20">
```

### 6. Storybookでの動作確認

```bash
npm run storybook
```

確認項目：
- [ ] ライトモードで正しく表示される
- [ ] ダークモードで正しく表示される
- [ ] テーマ切り替えボタンで正しく切り替わる
- [ ] 各種propsが正しく動作する
- [ ] フォーカス、ホバーなどの状態が正しい
- [ ] Filament公式ページと見た目が一致している

#### テーマ切り替え方法

Storybookツールバーの「light theme」/「dark theme」ボタンで切り替え

### 7. エクスポート

`src/components/index.ts` に追加：
```typescript
export { ComponentName } from './fields/ComponentName';
export type { ComponentNameProps } from './fields/ComponentName.types';
```

## チェックリスト

新しいコンポーネントを実装する際のチェックリスト：

- [ ] Filament公式ドキュメントでUIデザインを確認
- [ ] FilamentリファレンスプロジェクトでAPI設計を確認
- [ ] 型定義ファイル（.types.ts）を作成
- [ ] コンポーネント実装（.tsx）
- [ ] Storybookストーリー（.stories.tsx）を作成
- [ ] ライトモードで動作確認
- [ ] ダークモードで動作確認
- [ ] index.tsにエクスポート追加

## トラブルシューティング

### ダークモードが正しく動作しない

- Tailwind CSS v4は`@variant dark`の設定が必要
- `src/styles/index.css`に`@variant dark (&:where(.dark, .dark *))`が含まれているか確認
- `:root`に`color-scheme: light`が設定されているか確認

### スタイルが適用されない

- Storybookを再起動してみる
- ブラウザのキャッシュをクリア
- `npm run build`でビルドエラーがないか確認

### Filamentと見た目が異なる

- Filament公式ページをライトモード/ダークモード両方で確認
- ブラウザの開発者ツールでFilamentのCSSクラスを確認
- 特に`ring-`、`shadow-`、`bg-`のクラスに注目
