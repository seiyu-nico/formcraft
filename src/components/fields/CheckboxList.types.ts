import { InputHTMLAttributes } from 'react';

export interface CheckboxListOption {
  /** オプションの値 */
  value: string;

  /** オプションのラベル */
  label: string;

  /** オプションの説明文 */
  description?: string;

  /** このオプションを無効にするか */
  disabled?: boolean;
}

export interface CheckboxListProps {
  /** フィールド名 */
  name: string;

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;

  /** 選択肢 */
  options: CheckboxListOption[];

  /** 必須 */
  required?: boolean;

  /** 無効 */
  disabled?: boolean;

  /** 読み取り専用 */
  readOnly?: boolean;

  /** デフォルト値（選択された値の配列） */
  defaultValue?: string[];

  /** グリッドカラム数（1, 2, 3など） */
  columns?: number;

  /** 検索可能（オプションが多い場合に便利） */
  searchable?: boolean;

  /** 全選択/全解除ボタンを表示 */
  bulkToggleable?: boolean;

  /** バリデーション関数 */
  validate?: (value: string[]) => string | undefined | Promise<string | undefined>;

  /** 変更時のコールバック */
  onChange?: (value: string[]) => void;

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
