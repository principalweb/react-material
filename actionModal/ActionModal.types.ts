import { ReactNode } from 'react';

export type ActionModalProps = {
  title: string;
  isOpened: boolean;
  submitText: string;
  actions: ActionModalAction[];
  onClose: VoidFunction;
  handleSubmit: VoidFunction;
  isLoading: boolean;
};

export type ActionModalAction = { key: string; title: string; content: ReactNode };

export type ActionModalFormProps = {
  title: string;
  isOpened: boolean;
  submitText: string;
  actions: ActionModalAction[];
  onClose: VoidFunction;
  onSubmit: (values: Record<string, string | string[]>) => Promise<undefined>;
  initialValues: Record<string, string | string[]> | null;
};
