import { TextareaHTMLAttributes } from 'react';
import { BaseFieldProps } from '../../../types/field';

export type ResizeOption = 'none' | 'both' | 'horizontal' | 'vertical';

export interface TextAreaProps extends BaseFieldProps {
  /** プレースホルダー */
  placeholder?: string;

  /** オートコンプリート */
  autocomplete?: string;

  /** 最小文字数 */
  minLength?: number;

  /** 最大文字数 */
  maxLength?: number;

  /** 行数 */
  rows?: number;

  /** 列数 */
  cols?: number;

  /** 自動サイズ調整（入力内容に応じて高さが自動調整される） */
  autosize?: boolean;

  /** リサイズ可否 */
  resize?: ResizeOption;

  /** 値が変更されたときのコールバック */
  onChange?: (value: string) => void;

  /** 入力欄がフォーカスされたときのコールバック */
  onFocus?: () => void;

  /** 入力欄がフォーカスを失ったときのコールバック */
  onBlur?: () => void;

  /** 追加のHTML属性 */
  extraTextareaAttributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}
