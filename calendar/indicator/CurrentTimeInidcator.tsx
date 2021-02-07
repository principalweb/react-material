import React from 'react';
import {
  CurrentTimeIndicator as Indicator,
  CurrentTimeIndicatorProps,
} from '@devexpress/dx-react-scheduler-material-ui';

import { useStyles } from './CurrentTimeInidicator.styles';

const InicatorComponent = (props: Indicator.IndicatorProps) => {
  const classes = useStyles();

  return <Indicator.Indicator {...props} className={classes.root} />;
};

export const CurrentTimeIndicator = (props: CurrentTimeIndicatorProps) => {
  return <Indicator indicatorComponent={InicatorComponent} {...props} />;
};
