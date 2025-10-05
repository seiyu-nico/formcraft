# ディレクトリ構成

FormCraftはnpmパッケージとして配布されるReactベースのフォームビルダーライブラリです。

## 構成

```
formcraft/
├── src/                    # ソースコード
│   ├── components/         # フォームコンポーネント
│   │   ├── Form.tsx
│   │   ├── Form.test.tsx
│   │   ├── Form.stories.tsx
│   │   ├── FormBuilder.tsx
│   │   ├── FormBuilder.test.tsx
│   │   ├── FormBuilder.stories.tsx
│   │   ├── fields/        # フィールドコンポーネント
│   │   │   ├── TextInput.tsx
│   │   │   ├── TextInput.test.tsx
│   │   │   ├── TextInput.stories.tsx
│   │   │   ├── TextArea.tsx
│   │   │   ├── TextArea.test.tsx
│   │   │   ├── TextArea.stories.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Select.test.tsx
│   │   │   ├── Select.stories.tsx
│   │   │   ├── Checkbox.tsx
│   │   │   ├── Checkbox.test.tsx
│   │   │   ├── Checkbox.stories.tsx
│   │   │   ├── Radio.tsx
│   │   │   ├── Radio.test.tsx
│   │   │   ├── Radio.stories.tsx
│   │   │   ├── DatePicker.tsx
│   │   │   ├── DatePicker.test.tsx
│   │   │   ├── DatePicker.stories.tsx
│   │   │   └── index.ts
│   │   ├── layout/        # レイアウトコンポーネント
│   │   │   ├── Section.tsx
│   │   │   ├── Section.test.tsx
│   │   │   ├── Section.stories.tsx
│   │   │   ├── Grid.tsx
│   │   │   ├── Grid.test.tsx
│   │   │   ├── Grid.stories.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   ├── builders/          # ビルダークラス（Filament風のAPI）
│   │   ├── FormBuilder.ts
│   │   ├── FormBuilder.test.ts
│   │   ├── FieldBuilder.ts
│   │   ├── FieldBuilder.test.ts
│   │   └── index.ts
│   ├── hooks/             # カスタムフック
│   │   ├── useForm.ts
│   │   ├── useForm.test.ts
│   │   ├── useField.ts
│   │   ├── useField.test.ts
│   │   └── index.ts
│   ├── context/           # Reactコンテキスト
│   │   ├── FormContext.tsx
│   │   ├── FormContext.test.tsx
│   │   └── index.ts
│   ├── types/             # 型定義
│   │   ├── form.ts
│   │   ├── field.ts
│   │   └── index.ts
│   ├── utils/             # ユーティリティ関数
│   │   ├── validation.ts
│   │   ├── validation.test.ts
│   │   └── index.ts
│   └── index.ts           # パッケージのエントリーポイント
├── dist/                  # ビルド成果物（.gitignoreに追加）
├── examples/              # 使用例
│   └── basic/
├── .storybook/            # Storybook設定
│   ├── main.ts
│   └── preview.ts
├── docs/                  # ドキュメント
├── .gitignore
├── package.json
├── tsconfig.json          # TypeScript設定
├── rollup.config.js       # or vite.config.ts（バンドル設定）
├── README.md
└── LICENSE
```

## ディレクトリの役割

### `src/`
ライブラリのソースコード。すべてのコンポーネント、フック、ユーティリティがここに配置されます。

### `src/components/`
フォームを構成するReactコンポーネント。
- `fields/`: 各種入力フィールドコンポーネント
- `layout/`: レイアウト用コンポーネント

### `src/builders/`
Laravel Filament風のビルダーAPIを提供するクラス群。

### `src/hooks/`
フォーム管理用のカスタムReactフック。

### `src/context/`
フォームの状態を管理するReactコンテキスト。

### `src/types/`
TypeScriptの型定義ファイル。

### `src/utils/`
バリデーションなどのユーティリティ関数。

### `dist/`
ビルドされたファイルの出力先。npmパッケージとして公開されるのはこのディレクトリの内容。

### `examples/`
ライブラリの使用例サンプルコード。

### `.storybook/`
Storybookの設定ファイル。

## テスト・ストーリーファイルの配置

テストファイル（`*.test.tsx`）とStorybookストーリー（`*.stories.tsx`）は、対象ファイルと同じディレクトリに配置します。

**メリット：**
- ファイルとテスト/ストーリーの関連が明確
- インポートパスが短い
- ファイル移動・削除時に一緒に管理しやすい

## package.json設定

```json
{
  "name": "@challtech/formcraft",
  "version": "0.0.1",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "files": ["dist"],
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}
```

`files`フィールドで`dist`のみを指定することで、テストファイルやストーリーファイルはnpmパッケージに含まれません。
