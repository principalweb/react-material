import { MonthView as Month, MonthViewProps } from '@devexpress/dx-react-scheduler-material-ui';
import React from 'react';

import { useStyles } from './MonthView.styles';

const DayLayout = (props: Month.DayScaleLayoutProps) => {
  const classes = useStyles();

  return <Month.DayScaleLayout {...props} className={classes.root} />;
};
const Cell = (props: Month.TimeTableCellProps) => {
  const classes = useStyles();

  return <Month.TimeTableCell {...props} className={classes.appointmentRoot} />;
};

export const MonthView = (props: MonthViewProps) => {
  return <Month {...props} timeTableCellComponent={Cell} dayScaleLayoutComponent={DayLayout} />;
};
