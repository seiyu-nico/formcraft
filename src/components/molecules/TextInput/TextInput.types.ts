import { InputHTMLAttributes } from 'react';
import { BaseFieldProps } from '../../../types/field';

export type TextInputType = 'text' | 'email' | 'password' | 'tel' | 'url' | 'number';

export interface TextInputProps extends BaseFieldProps {
  /** 入力タイプ */
  type?: TextInputType;

  /** プレースホルダー */
  placeholder?: string;

  /** オートコンプリート */
  autocomplete?: string;

  /** 最小値（type="number"の場合） */
  minValue?: number;

  /** 最大値（type="number"の場合） */
  maxValue?: number;

  /** ステップ（type="number"の場合） */
  step?: number | 'any';

  /** 最小文字数 */
  minLength?: number;

  /** 最大文字数 */
  maxLength?: number;

  /** パターン（正規表現） */
  pattern?: string;

  /** inputMode */
  inputMode?: InputHTMLAttributes<HTMLInputElement>['inputMode'];

  /** プレフィックス（入力欄の前に表示） */
  prefix?: string | React.ReactNode;

  /** サフィックス（入力欄の後に表示） */
  suffix?: string | React.ReactNode;

  /** パスワードの表示/非表示を切り替えられるようにする */
  revealable?: boolean;

  /** 値のコピーボタンを表示 */
  copyable?: boolean;

  /** 値が変更されたときのコールバック */
  onChange?: (value: string) => void;

  /** 入力欄がフォーカスされたときのコールバック */
  onFocus?: () => void;

  /** 入力欄がフォーカスを失ったときのコールバック */
  onBlur?: () => void;

  /** 追加のHTML属性 */
  extraInputAttributes?: InputHTMLAttributes<HTMLInputElement>;
}
