import * as React from 'react';
import { DayView as Day, DayViewProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from 'ui/organisms/calendar/dayView/DayView.styles';

const DayScale = ({ ...props }: Day.DayScaleLayoutProps) => {
  const classes = useStyles();

  return <Day.DayScaleLayout {...props} className={classes.day} />;
};

const DayScaleLabel = ({ ...props }: Day.TimeScaleLabelProps) => {
  const classes = useStyles();

  return <Day.TimeScaleLabel {...props} className={classes.root} />;
};

const DayLayout = ({ ...props }: Day.LayoutProps) => {
  const classes = useStyles();

  return <Day.Layout {...props} className={classes.day} />;
};

const DayEmpty = ({ ...props }: Day.DayScaleEmptyCellProps) => {
  const classes = useStyles();

  return <Day.DayScaleEmptyCell {...props} className={classes.empty} />;
};

export const DayView = ({ disableHead, ...props }: DayViewProps & { disableHead?: boolean }) => (
  <Day
    {...props}
    dayScaleLayoutComponent={disableHead ? () => <></> : DayScale}
    layoutComponent={DayLayout}
    timeScaleLabelComponent={DayScaleLabel}
    dayScaleEmptyCellComponent={DayEmpty}
  />
);
