# TODO

## フィールドコンポーネントのスタイル整理

### タスク
`src/styles/index.css`に記述しているチェックボックス・ラジオボタンのカスタムスタイルを、コンポーネント用の専用CSSファイルに移動する。

### 実装案
`src/components/fields/fields.css`を作成し、以下を移動:
- Checkbox用のカスタムSVGアイコン
- Radio用のカスタムSVGアイコン
- その他のフィールドコンポーネント共通のスタイル

### 現在の該当コード
`src/styles/index.css` の50-66行目:
```css
/* Checkbox styles */
input[type='checkbox'] {
  @apply appearance-none;
}

input[type='checkbox']:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E");
}

/* Radio styles */
input[type='radio'] {
  @apply appearance-none;
}

input[type='radio']:checked {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
}
```

### 作業手順
1. `src/components/fields/fields.css`を作成
2. 上記のスタイルを移動
3. `src/styles/index.css`から該当部分を削除
4. 必要な箇所で`fields.css`をインポート
