import { ReactNode } from 'react';

export type AutoCalculateFormProps = {
  name: string;
  label: string;
  disabled: boolean;
  children: (isCalculated: boolean) => ReactNode;
};
