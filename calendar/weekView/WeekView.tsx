import * as React from 'react';
import { WeekView as Week, WeekViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from 'ui/organisms/calendar/weekView/WeekView.styles';

const WeekTimeTableCell = ({ ...props }: Week.TimeTableCellProps) => {
  const classes = useStyles();

  return <Week.TimeTableCell {...props} className={classes.root} />;
};

const WeekTimeScaleLabel = ({ ...props }: Week.TimeScaleLabelProps) => {
  const classes = useStyles();

  return <Week.TimeScaleLabel {...props} className={classes.root} />;
};

const WeekDayScale = ({ ...props }: Week.DayScaleLayoutProps) => {
  const classes = useStyles();

  return <Week.DayScaleLayout {...props} className={classes.root} />;
};

const WeekLayout = ({ ...props }: Week.LayoutProps) => {
  const classes = useStyles();

  return <Week.Layout {...props} className={classes.week} />;
};

export const WeekView = (props: WeekViewProps) => (
  <Week
    {...props}
    layoutComponent={WeekLayout}
    dayScaleLayoutComponent={WeekDayScale}
    timeScaleLabelComponent={WeekTimeScaleLabel}
    timeTableCellComponent={WeekTimeTableCell}
  />
);
