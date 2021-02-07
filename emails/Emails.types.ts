import { EmailProps } from 'ui/molecules/email/Email.types';

import { EmailFilter } from './filters/Filters.types';

export type EmailItem = Omit<EmailProps, 'onClick'>;

export type EmailsProps = {
  data: EmailItem[];
  onMoreClick: () => void;
  onEmailClick: (id: string) => void;
  count: number;
  loading?: boolean;
  activeFilters?: EmailFilter;
  onFilter: (filters: EmailFilter) => void;
};
