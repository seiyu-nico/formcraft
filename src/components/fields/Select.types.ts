import { InputHTMLAttributes } from 'react';

export interface SelectOption {
  /** オプションの値 */
  value: string;

  /** オプションのラベル */
  label: string;

  /** このオプションを無効にするか */
  disabled?: boolean;
}

export interface SelectProps {
  /** フィールド名 */
  name: string;

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;

  /** 選択肢 */
  options: SelectOption[];

  /** プレースホルダー */
  placeholder?: string;

  /** 必須 */
  required?: boolean;

  /** 無効 */
  disabled?: boolean;

  /** 読み取り専用 */
  readOnly?: boolean;

  /** デフォルト値 */
  defaultValue?: string | string[];

  /** 複数選択を許可 */
  multiple?: boolean;

  /** ネイティブHTMLセレクト要素を使用（デフォルト: true） */
  native?: boolean;

  /** 検索可能（nativeがfalseの場合のみ有効） */
  searchable?: boolean;

  /** プレフィックス */
  prefix?: string;

  /** サフィックス */
  suffix?: string;

  /** バリデーション関数 */
  validate?: (value: string | string[]) => string | undefined | Promise<string | undefined>;

  /** 変更時のコールバック */
  onChange?: (value: string | string[]) => void;

  /** フォーカス時のコールバック */
  onFocus?: () => void;

  /** ブラー時のコールバック */
  onBlur?: () => void;

  /** 追加のCSSクラス */
  className?: string;

  /** 追加のselect属性 */
  extraInputAttributes?: Omit<
    InputHTMLAttributes<HTMLSelectElement>,
    'name' | 'value' | 'required' | 'disabled' | 'readOnly' | 'onChange' | 'onFocus' | 'onBlur' | 'multiple'
  >;
}
