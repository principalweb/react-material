import { DropdownProps } from 'ui/atoms/dropdown/Dropdown.types';

export type LocaleSwitchProps = Partial<DropdownProps> & {
  name?: string;
  isFormField?: boolean;
};
