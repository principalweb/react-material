import React from 'react';
import { AllDayPanel as AllDay, AllDayPanelProps } from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './AllDayPanel.styles';

const Cell = (props: AllDay.CellProps) => {
  const classes = useStyles();

  return <AllDay.Cell {...props} className={classes.root} />;
};

const Container = (props: AllDay.ContainerProps) => {
  const classes = useStyles();

  return <AllDay.Container {...props} className={classes.container} />;
};

export const AllDayPanel = (props: AllDayPanelProps) => {
  return <AllDay containerComponent={Container} {...props} cellComponent={Cell} />;
};
