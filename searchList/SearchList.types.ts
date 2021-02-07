import { ReactNode } from 'react';

export type SearchItemProps<T> = {
  isInitiallySelected: boolean;
  item: T;
  highlightString: (value: string) => string | (string | JSX.Element)[];
};

export type SearchListProps<T> = {
  items: T[];
  selectedItemsIds: string[];
  item: (values: SearchItemProps<T>) => ReactNode;
  filterItem: (item: T, currentValue: string) => boolean;
  resultListLabel?: string;
};
