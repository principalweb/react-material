import React, { useState } from 'react';
import { useField } from 'react-final-form';

import { FormControlLabel, Checkbox, Box } from 'ui/atoms';

import { AutoCalculateFormProps } from './AutoCalculateForm.types';
import { AutoCalculateModal } from './autoCalculateModal/AutoCalculateModal';

export const AutoCalculateForm = ({ name, label, disabled, children }: AutoCalculateFormProps) => {
  const [modalOpened, setModalOpened] = useState(false);

  const { input } = useField<boolean>(name);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    if (!checked) {
      input.onChange(false);

      return;
    }

    setModalOpened(true);
  };

  const handleSubmit = async (): Promise<{ error: boolean } | undefined> => {
    input.onChange(true);

    return Promise.resolve(undefined);
  };

  return (
    <>
      {modalOpened && (
        <AutoCalculateModal
          isOpened={modalOpened}
          titleId="project_details.general.address.auto_title"
          descriptionFirstId="project_details.general.address.auto_description_1"
          descriptionSecondId="project_details.general.address.auto_description_2"
          onSubmit={handleSubmit}
          onClose={() => setModalOpened(false)}
        />
      )}
      <FormControlLabel
        control={
          <Box my={1}>
            <Checkbox
              color="primary"
              size="medium"
              checked={!!input.value}
              onChange={handleChange}
              disabled={disabled}
            />
          </Box>
        }
        label={label}
      />
      {children(!!input.value)}
    </>
  );
};
