import { LabelInput, LabelProperty } from 'api/types';
import { EntityType } from 'app/shared/entityType';
import { IconSelectedTheme } from 'ui/molecules/iconPicker/IconPicker.types';

export type AddCustomPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: VoidFunction;
  property: LabelProperty;
  title?: string;
  labelId?: string;
  entityType?: EntityType;
  iconPickerSelectedTheme?: IconSelectedTheme;
  placeholderId?: string;
  addText?: string;
};

export type AddCustomPropertyModalProps = Omit<AddCustomPropertyModalContainerProps, 'property'> & {
  onSubmit: (input: Pick<LabelInput, 'text' | 'icon'>) => {};
};
