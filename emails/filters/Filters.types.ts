import { ReactNode } from 'react';
import { GridSize } from '@material-ui/core';

export type EmailFilter = {
  inbox: string;
};

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type FiltersTypes = {
  key: string;
  type: string;
  size: GridSize;
  options?: CheckboxDataType[];
  from?: number;
  to?: number;
};

export type FilterProps = {
  isOpened: boolean;
  activeTab: number;
  onClose: () => void;
  onSubmit: (body: EmailFilter) => void;
  onTabChange: (index: number) => void;
  data?: EmailFilter;
  onDeleteFilter: (filters: EmailFilter) => void;
};

export type FilterContainerProps = {
  isOpened: boolean;
  onClose: () => void;
  data?: EmailFilter;
  getFilteredAmount?: (amount: number) => void;
};

export type FilterButtonProps = {
  data?: EmailFilter;
  getActiveFilters?: (filters: EmailFilter) => void;
};

export type FilterSidenavProps = {
  filters: FiltersTypes[];
  selectedFilters?: EmailFilter;
  onChange: (index: number) => void;
};

export type FilterTabPanelProps = {
  filterType: string;
  children: ReactNode;
  activeTab: number;
  id: number;
  onDeleteFilter?: () => void;
  onSearch?: (value: string) => void;
};
