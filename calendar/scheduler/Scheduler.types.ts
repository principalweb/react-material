import { Scheduler, SchedulerProps as BaseProps } from '@devexpress/dx-react-scheduler-material-ui';

import { DateView } from 'ui/molecules/calendar/Calandar.types';

export type SchedulerProps = BaseProps &
  Scheduler.RootProps & {
    currentView: DateView;
  };
