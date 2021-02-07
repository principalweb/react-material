import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';

export type AgendaSectionProps = {
  onMoreClick: () => void;
  onAddClick: () => void;
  data: AgendaItemProps[];
};
