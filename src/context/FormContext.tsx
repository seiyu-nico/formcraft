import React, { createContext, useContext, useState, useCallback } from 'react';

interface FormContextValue {
  /** フォームの値 */
  values: Record<string, unknown>;

  /** フィールドの値を設定 */
  setFieldValue: (name: string, value: unknown) => void;

  /** フォームのエラー */
  errors: Record<string, string>;

  /** フィールドのエラーを設定 */
  setFieldError: (name: string, error: string | undefined) => void;

  /** フィールドがタッチされたか */
  touched: Record<string, boolean>;

  /** フィールドをタッチ済みにする */
  setFieldTouched: (name: string, isTouched: boolean) => void;

  /** フォームが送信中か */
  isSubmitting: boolean;
}

const FormContext = createContext<FormContextValue | null>(null);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  initialValues?: Record<string, unknown>;
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ initialValues = {}, children }) => {
  const [values, setValues] = useState<Record<string, unknown>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting] = useState(false);

  const setFieldValue = useCallback((name: string, value: unknown) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  const setFieldError = useCallback((name: string, error: string | undefined) => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      if (error === undefined) {
        delete newErrors[name];
      } else {
        newErrors[name] = error;
      }
      return newErrors;
    });
  }, []);

  const setFieldTouched = useCallback((name: string, isTouched: boolean) => {
    setTouched((prev) => ({ ...prev, [name]: isTouched }));
  }, []);

  return (
    <FormContext.Provider
      value={{
        values,
        setFieldValue,
        errors,
        setFieldError,
        touched,
        setFieldTouched,
        isSubmitting,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
