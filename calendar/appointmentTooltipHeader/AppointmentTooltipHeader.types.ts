import { AppointmentModel } from '@devexpress/dx-react-scheduler';

import { AppointmentTooltip } from 'ui/organisms';

export type AppointmentTooltipHeaderProps = AppointmentTooltip.HeaderProps & {
  onEdit: (appointmentData: AppointmentModel | undefined) => void;
};
