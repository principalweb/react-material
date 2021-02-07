import { AnyObject, FormProps, FormRenderProps } from 'react-final-form';
import { ReactNode } from 'react';

export type KeyValuesObject<T> = { [key: string]: T };
export type AutosaveFunctionChildren = (form: FormRenderProps<AnyObject>) => ReactNode;

export type FormObject<T> = {
  values: KeyValuesObject<T>;
};

export type AutosaveProps = Omit<FormProps, 'onSubmit' | 'children'> & {
  children: AutosaveFunctionChildren | ReactNode;
  onSave(values: unknown): Promise<undefined | { error: boolean }>;
  timeout?: number;
};
