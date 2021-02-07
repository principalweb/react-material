import * as React from 'react';

export type VisitedPagesProps = {
  onMoreClick?: () => void;
  opened: boolean;
  children: React.ReactNode;
};
