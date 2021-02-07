import { ExpansionPanelSummaryProps } from '@material-ui/core/ExpansionPanelSummary';
import { ReactNode } from 'react';

export type FormSectionHeaderProps = ExpansionPanelSummaryProps & { editing: string };

export type FunctionChildren = (editing: boolean) => ReactNode;

export type FormSectionBaseProps = {
  title: ReactNode;
  titleBadge?: number;
  isEditable?: boolean;
  onAdd?: VoidFunction;
  onOptionsClick?: VoidFunction;
  onSettingsClick?: VoidFunction;
  onEditClick?: VoidFunction;
  isExpandable?: boolean;
  isInitExpanded?: boolean;
  className?: string;
  isInitEditing?: boolean;
  buttons?: ReactNode;
  loading?: boolean;
};

export type FormSectionProps = FormSectionBaseProps & {
  children: FunctionChildren | ReactNode;
};

export type FormSectionRef = {
  handleSetEdit: (value: boolean) => void;
  handleSetExpanded: (value: boolean) => void;
};
