export type ValidationError = string | undefined;

export type ValidationFunction<T = any> = (value: T) => ValidationError | Promise<ValidationError>;

export interface BaseFieldProps {
  /** フィールドの名前 */
  name: string;

  /** ラベル */
  label?: string;

  /** ヘルパーテキスト */
  helperText?: string;

  /** 必須フィールドかどうか */
  required?: boolean;

  /** 無効化するかどうか */
  disabled?: boolean;

  /** 読み取り専用かどうか */
  readOnly?: boolean;

  /** バリデーション関数 */
  validate?: ValidationFunction;

  /** 初期値 */
  defaultValue?: any;

  /** クラス名 */
  className?: string;
}
