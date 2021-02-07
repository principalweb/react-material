import { ReactNode } from 'react';

export type OptionDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type RangeProps = {
  name: string;
  suffix?: string;
  options: OptionDataType[];
};
