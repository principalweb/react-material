import React from 'react';

import { IconButton, Box } from 'ui/atoms';
import { EditIcon, MenuIcon } from 'ui/atoms/icons';
import { AppointmentTooltip } from 'ui/organisms';

import { useStyles } from './AppointmentTooltipHeader.styles';
import { AppointmentTooltipHeaderProps } from './AppointmentTooltipHeader.types';

export const AppointmentTooltipHeader = ({
  children,
  appointmentData,
  onEdit,
  ...restProps
}: AppointmentTooltipHeaderProps) => {
  const classes = useStyles();

  return (
    <AppointmentTooltip.Header {...restProps} appointmentData={appointmentData} className={classes.root}>
      <IconButton variant="roundedContained" size="small" onClick={() => onEdit(appointmentData)}>
        <EditIcon />
      </IconButton>
      <Box ml={3} />
      <IconButton variant="roundedContained" size="small" onClick={() => {}}>
        <MenuIcon />
      </IconButton>
    </AppointmentTooltip.Header>
  );
};
