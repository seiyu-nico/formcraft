export interface ToggleProps {
  /** フィールド名 */
  name: string;

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;

  /** 必須 */
  required?: boolean;

  /** 無効 */
  disabled?: boolean;

  /** 読み取り専用 */
  readOnly?: boolean;

  /** デフォルト値 */
  defaultValue?: boolean;

  /** インラインレイアウト（ラベルがトグルの横に表示される） */
  inline?: boolean;

  /** バリデーション関数 */
  validate?: (value: boolean) => string | undefined | Promise<string | undefined>;

  /** 変更時のコールバック */
  onChange?: (value: boolean) => void;

  /** フォーカス時のコールバック */
  onFocus?: () => void;

  /** ブラー時のコールバック */
  onBlur?: () => void;

  /** 追加のCSSクラス */
  className?: string;
}
