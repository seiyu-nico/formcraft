import { ReactNode } from 'react';

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface ResponsiveColumns {
  default?: GridColumns;
  sm?: GridColumns;
  md?: GridColumns;
  lg?: GridColumns;
  xl?: GridColumns;
  '2xl'?: GridColumns;
}

export interface GridProps {
  /** グリッドのカラム数（数値または レスポンシブ設定） */
  columns?: GridColumns | ResponsiveColumns;

  /** 子要素 */
  children?: ReactNode;

  /** クラス名 */
  className?: string;
}
