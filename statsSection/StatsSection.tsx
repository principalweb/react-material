import { useTheme } from '@material-ui/core/styles';
import React from 'react';

import { Scrollable } from 'ui/atoms';

import { StatsSectionProps } from './StatsSection.types';
import { useStyles } from './StatsSection.styles';

export const StatsSection = ({ children, width }: StatsSectionProps) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Scrollable width={width ? width : '100%'} height={theme.spacing(12)}>
      <div className={classes.content}>{children}</div>
    </Scrollable>
  );
};
