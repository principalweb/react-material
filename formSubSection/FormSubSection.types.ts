import { ReactNode } from 'react';

export type FormSubSectionProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  onOptionsClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  counter?: number;
  initiallyOpened?: boolean;
  isExpanded?: boolean;
  onExpand?: VoidFunction;
  customOption?: ReactNode;
};
