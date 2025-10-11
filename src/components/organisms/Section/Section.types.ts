import { ReactNode } from 'react';

export type IconColor = 'gray' | 'primary' | 'danger' | 'success' | 'warning' | 'info';
export type IconSize = 'sm' | 'md' | 'lg';

export interface SectionProps {
  /** セクションの見出し */
  heading?: string;

  /** セクションの説明文 */
  description?: string;

  /** アイコン（Heroicons名またはReactNode） */
  icon?: ReactNode;

  /** アイコンの色 */
  iconColor?: IconColor;

  /** アイコンのサイズ */
  iconSize?: IconSize;

  /** 折りたたみ可能かどうか */
  collapsible?: boolean;

  /** 初期状態で折りたたまれているか */
  collapsed?: boolean;

  /** ヘッダーを横に配置 */
  aside?: boolean;

  /** コンパクト表示 */
  compact?: boolean;

  /** セクションの内容 */
  children?: ReactNode;

  /** クラス名 */
  className?: string;

  /** カスタムID（折りたたみ状態の永続化に使用） */
  id?: string;

  /** 折りたたみ状態を永続化するか */
  persistCollapsed?: boolean;
}
