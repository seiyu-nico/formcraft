import React, { FormEvent, useState } from 'react';
import { FormProps } from './Form.types';
import { FormProvider } from '../context/FormContext';

export const Form: React.FC<FormProps> = ({
  onSubmit,
  initialValues = {},
  validate,
  children,
  className = '',
  id,
  disabled = false,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (disabled || isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      // フォームデータを収集
      const formData = new FormData(e.currentTarget);
      const values: Record<string, string> = {};

      formData.forEach((value, key) => {
        values[key] = value.toString();
      });

      // バリデーション実行
      if (validate) {
        const errors = await Promise.resolve(validate(values));
        if (Object.keys(errors).length > 0) {
          // TODO: エラーをフォームコンテキストに設定する
          setIsSubmitting(false);
          return;
        }
      }

      // フォーム送信
      if (onSubmit) {
        await Promise.resolve(onSubmit(values));
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FormProvider initialValues={initialValues}>
      <form
        id={id}
        onSubmit={handleSubmit}
        className={`space-y-6 ${className}`}
        noValidate
      >
        {children}
      </form>
    </FormProvider>
  );
};

Form.displayName = 'Form';
