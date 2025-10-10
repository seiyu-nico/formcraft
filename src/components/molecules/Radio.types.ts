import { InputHTMLAttributes } from 'react';

export interface RadioOption {
  /** オプションの値 */
  value: string;

  /** オプションのラベル */
  label: string;

  /** オプションの説明文 */
  description?: string;

  /** このオプションを無効にするか */
  disabled?: boolean;
}

export interface RadioProps {
  /** フィールド名 */
  name: string;

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;

  /** 選択肢 */
  options: RadioOption[];

  /** 必須 */
  required?: boolean;

  /** 無効 */
  disabled?: boolean;

  /** 読み取り専用 */
  readOnly?: boolean;

  /** デフォルト値 */
  defaultValue?: string;

  /** インラインレイアウト（オプションが横並びに表示される） */
  inline?: boolean;

  /** バリデーション関数 */
  validate?: (value: string) => string | undefined | Promise<string | undefined>;

  /** 変更時のコールバック */
  onChange?: (value: string) => void;

  /** フォーカス時のコールバック */
  onFocus?: () => void;

  /** ブラー時のコールバック */
  onBlur?: () => void;

  /** 追加のCSSクラス */
  className?: string;

  /** 追加のinput属性 */
  extraInputAttributes?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    | 'type'
    | 'name'
    | 'value'
    | 'checked'
    | 'required'
    | 'disabled'
    | 'readOnly'
    | 'onChange'
    | 'onFocus'
    | 'onBlur'
  >;
}
