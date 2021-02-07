import React from 'react';
import { Scheduler as SchedulerComponent } from '@devexpress/dx-react-scheduler-material-ui';
import groupBy from 'lodash/groupBy';
import { AppointmentModel, SchedulerDateTime } from '@devexpress/dx-react-scheduler';
import { DateTime } from 'luxon';

import { DateView } from 'ui/molecules/calendar/Calandar.types';
import { CalendarTypes } from 'api/types';

import { SchedulerProps } from './Scheduler.types';

const toDateTime = (date: SchedulerDateTime) => {
  if (typeof date === 'string') {
    return DateTime.fromISO(date);
  } else if (typeof date === 'number') {
    return DateTime.fromMillis(date);
  }

  return DateTime.fromJSDate(date);
};

const convertAppointmentsGroup = (data: AppointmentModel[], groupDate: string, isAllDay = false) => {
  const displayMax = isAllDay ? 3 : 4;
  const date = DateTime.fromFormat(`${groupDate} 23:59:59`, 'dd LL yyyy hh:mm:ss');
  const amount = data.length;
  const baseGroupAppointment = {
    startDate: date.minus({ minute: 1 }).toJSDate(),
    endDate: date.toJSDate(),
    isHidden: true,
    allDay: isAllDay,
  };

  if (amount > displayMax) {
    data = [
      {
        ...baseGroupAppointment,
        isShowMoreButton: true,
        isHidden: false,
        amount: data.length - displayMax + 1,
        appointments: data,
      },
      ...data.slice(0, displayMax - 1),
    ];
  } else if (amount < displayMax) {
    for (let i = 0; i < displayMax - amount; i++) {
      data.push(baseGroupAppointment);
    }
  }

  return data;
};

const addTravelTimes = (appointments: AppointmentModel[]) => {
  //@ToDo move this to backend :)
  [...appointments].forEach(app => {
    if (app.travelTimeBefore) {
      appointments.push({
        type: CalendarTypes.Travel,
        endDate: app.startDate,
        startDate: toDateTime(app.startDate)
          .minus({ minutes: app.travelTimeBefore })
          .toJSDate(),
      });
    }

    if (app.travelTimeAfter) {
      appointments.push({
        type: CalendarTypes.Travel,
        startDate: app.endDate,
        endDate: toDateTime(app.endDate)
          .plus({ minutes: app.travelTimeAfter })
          .toJSDate(),
      });
    }
  });

  return appointments;
};

export const Scheduler = ({ currentView, data, ...props }: SchedulerProps) => {
  const grouped = groupBy(data, appointment => {
    return toDateTime(appointment.startDate).toFormat('dd LL yyyy');
  });

  if (currentView === DateView.Month) {
    data = Object.entries(grouped).flatMap(group => convertAppointmentsGroup(group[1], group[0]));
  } else {
    data = Object.entries(grouped).flatMap(group => {
      const allDay = group[1].filter(appointment => !!appointment.allDay);
      let moreAppointments = group[1].filter(appointment => !appointment.allDay);

      moreAppointments = addTravelTimes(moreAppointments);

      return [...convertAppointmentsGroup(allDay, group[0], true).reverse(), ...moreAppointments];
    });
  }

  return <SchedulerComponent {...props} data={data} />;
};
