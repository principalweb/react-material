import * as React from 'react';

export type OrdersProps = {
  onAddClick: () => void;
  onMoreClick: () => void;
  onManageClick: () => void;
  children: React.ReactNode;
  tabs: React.ReactNode;
};
