import { InputHTMLAttributes } from 'react';

export interface HiddenProps {
  /** フィールド名 */
  name: string;

  /** 値 */
  value: string;

  /** 追加のinput属性 */
  extraInputAttributes?: Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'value'>;
}
