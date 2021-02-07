import { ReactNode } from 'react';

export type ConflictInfoProps = {
  onCancel: VoidFunction;
  messageLineFirst: ReactNode;
  messageLineSecond: ReactNode;
  cancel: ReactNode;
  confirm: ReactNode;
};
