export interface FormProps {
  /** フォーム送信時のハンドラー */
  onSubmit?: (values: Record<string, string>) => void | Promise<void>;

  /** 初期値 */
  initialValues?: Record<string, unknown>;

  /** フォーム送信時のバリデーション */
  validate?: (values: Record<string, string>) => Record<string, string> | Promise<Record<string, string>>;

  /** 子要素 */
  children: React.ReactNode;

  /** 追加のクラス名 */
  className?: string;

  /** フォームID */
  id?: string;

  /** 送信ボタンを無効化するかどうか（送信中など） */
  disabled?: boolean;
}
