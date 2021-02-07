import React from 'react';
import { Appointments as App, AppointmentsProps } from '@devexpress/dx-react-scheduler-material-ui';
import classNames from 'classnames';
import { DateTime } from 'luxon';
import { ValidResourceInstance } from '@devexpress/dx-react-scheduler';
import { Box, Typography, useTheme } from '@material-ui/core';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { ShowMore } from 'ui/atoms/showMore/ShowMore';
import {
  CrmIcon,
  LockIcon,
  RedoIcon,
  RefreshIcon,
  ReplayIcon,
  ShareIcon,
  UserIcon,
  WarningIcon,
  EyeSlashIcon,
  BuildingIcon,
} from 'ui/atoms/icons';
import { CalendarTypes, TaskLabel } from 'api/types';
import { useLocale } from 'hooks';
import { IconButton, Scrollable } from 'ui/atoms';

import {
  AppointmentComponentProps,
  AppointmentContainerProps,
  AppointmentNodeProps as AppointmentProp,
  OverlapProps,
  ViewProps,
} from './Appointment.types';
import { useStyles, useContentStyles } from './Appointments.styles';

export const AppointmentComponent = ({ view, ...props }: AppointmentComponentProps) => {
  const color = props.resources.find(item => item.id === (props.data.taskLabel || props.data.state || props.data.type))
    ?.color as string;
  const classes = useStyles(color);
  props.data.color = color;

  if (props.data.type === CalendarTypes.Travel) {
    return <></>;
  }

  return (
    <App.Appointment
      {...props}
      className={classNames(
        classes.root,
        view !== DateView.Month && props.data.allDay && classes.allDay,
        view && classes?.[view],
        props.className,
        !!props.data.taskLabel && classes.task,
      )}
    />
  );
};

const getAppointmentData = (data: AppointmentProp[]) => {
  return (data[0] || data[1] || data[2]).props.params.data;
};

const AppointmentOverlap = ({ style }: OverlapProps) => {
  const classes = useStyles();

  return (
    <div className={classes.Warning} style={{ ...style }}>
      <WarningIcon color="secondary" />
    </div>
  );
};

const AppointmentContainer = ({ view = DateView.Week, ...props }: AppointmentContainerProps) => {
  const classes = useStyles();

  const data = getAppointmentData((props.children ?? []) as AppointmentProp[]);

  if (!!data.isShowMoreButton || !!data.isHidden) {
    const child = !data.isHidden && <ShowMore amount={data.amount} data={data.appointments} />;

    return (
      <div style={{ ...props.style }} className={classes.containerRoot}>
        {child}
      </div>
    );
  }

  if (!!data.overlap) {
    return view === DateView.Day ? <AppointmentOverlap style={props.style} /> : <></>;
  }

  return <App.Container {...props} />;
};

const TaskLabelIcon = ({ resource, className }: { resource?: ValidResourceInstance; className: string }) => {
  if (resource) {
    switch (resource.text as TaskLabel) {
      case TaskLabel.FollowUp:
        return <RedoIcon className={className} />;
      case TaskLabel.Business:
        return <UserIcon className={className} />;
      case TaskLabel.Private:
        return <LockIcon className={className} />;
      default:
    }
  }

  return <ReplayIcon className={className} />;
};

const AppointmentWithoutTravelTime = ({ ...props }: App.AppointmentContentProps) => {
  const theme = useTheme();
  const { formatMessage } = useLocale();
  const classes = useContentStyles(props.data.color);

  const startDate = DateTime.fromISO(props.data.startDate as string);
  const endDate = DateTime.fromISO(props.data.endDate as string);

  return (
    <Box height="100%">
      {props.data.travelTimeBefore && props.data.travelTimeBefore > 0 ? (
        <Box
          className={classes.travelBefore}
          style={{
            top: -(props.data.travelTimeBefore / 30) * theme.spacing(7.5),
            height: (props.data.travelTimeBefore / 30) * theme.spacing(7.5),
          }}
        >
          <Typography variant="h6" color="textSecondary">
            {startDate.minus({ minute: props.data.travelTimeBefore }).toLocaleString(DateTime.TIME_SIMPLE)} -{' '}
            {startDate.toLocaleString(DateTime.TIME_SIMPLE)}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
      <Scrollable width="100%" height="100%" noBottomScroller>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" style={{ color: props.data.color || theme.palette.gray.main }}>
                {props.data.title || `(${formatMessage({ id: 'calendar.appointments.no_title' })})`}
              </Typography>
              <Box mt={0.5}>
                <Typography variant="h6" color="textSecondary">
                  {startDate.toLocaleString(DateTime.TIME_SIMPLE)} - {endDate.toLocaleString(DateTime.TIME_SIMPLE)}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end" flexWrap="wrap-reverse">
                <IconButton size="small" variant="rounded">
                  <ShareIcon color="inherit" />
                </IconButton>
                <Box ml={1} />
                <IconButton size="small" variant="rounded">
                  <RefreshIcon color={theme.palette.gray.main} />
                </IconButton>
                <Box ml={1} />
                <IconButton size="small" variant="rounded">
                  <CrmIcon color="inherit" />
                </IconButton>
                <Box ml={1} />
                <IconButton size="small" variant="rounded">
                  <EyeSlashIcon color="inherit" fontSize="small" />
                </IconButton>
                <Box ml={1} />
                <Box
                  className={classes.statusBox}
                  style={{ background: props.data.color || theme.palette.gray.main }}
                />
              </Box>
              <Typography variant="h6">Weerschijnvlinder 8, Breda</Typography>
            </Box>
          </Box>
          <Box>
            <Box display="flex" alignItems="center">
              <Box mr={1} display="flex" alignItems="center" justifyContent="center" className={classes.statusIcon}>
                <CrmIcon color="inherit" />
              </Box>
              <Typography variant="h6" color="textSecondary">
                Mevr. N.C.A. (novita) Smit, Theunisse Makelaars o.g.
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={1}>
              <Box mr={1} display="flex" alignItems="center" justifyContent="center" className={classes.statusIcon}>
                <BuildingIcon color="inherit" />
              </Box>
              <Typography variant="h6" color="textSecondary">
                Weerschijnvlinder 8
              </Typography>
            </Box>
          </Box>
          {props.data.invitedPersons && (
            <Box display="flex" flexWrap="wrap" mt={1}>
              {props.data.invitedPersons.map((person: string, index: number) => (
                <Typography key={index} variant="h5" color="primary" className={classes.invitedPerson}>
                  John Doe
                </Typography>
              ))}
            </Box>
          )}
        </Box>
      </Scrollable>
      {props.data.travelTimeAfter && props.data.travelTimeAfter > 0 ? (
        <Box
          className={classes.travelAfter}
          style={{
            height: (props.data.travelAfter / 30) * theme.spacing(7.5),
          }}
        >
          <Typography variant="h6" color="textSecondary">
            {endDate.toLocaleString(DateTime.TIME_SIMPLE)} -{' '}
            {endDate.plus({ minute: props.data.travelTimeAfter }).toLocaleString(DateTime.TIME_SIMPLE)}
          </Typography>
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export const AppointmentContent = ({ ...props }: App.AppointmentContentProps) => {
  const taskResource = props.resources.find(resource => resource.fieldName === 'taskLabel');
  const classes = useContentStyles(props.data.color);

  if (taskResource) {
    const date = DateTime.fromJSDate(new Date(props.data.startDate));

    props.data.rRule = `RRULE:FREQ=DAILY;UNTIL=${date.toFormat(
      'yyyyddmm',
    )}T080800Z;COUNT=30;INTERVAL=1;WKST=MO;BYDAY=${date.weekdayShort.toUpperCase().substring(0, 2)}`;
  }

  props.recurringIconComponent = () => (
    <TaskLabelIcon className={taskResource ? classes.icon : classes.defaultIcon} resource={taskResource} />
  );

  if (props.data.type === CalendarTypes.Travel) {
    return <></>;
  } else {
    return <AppointmentWithoutTravelTime {...props} />;
  }
};

export const Appointments = ({ view = DateView.Week, ...props }: AppointmentsProps & ViewProps) => {
  return (
    <App
      {...props}
      containerComponent={props => <AppointmentContainer {...props} view={view} />}
      appointmentComponent={props => <AppointmentComponent {...props} view={view} />}
      appointmentContentComponent={AppointmentContent}
    />
  );
};
