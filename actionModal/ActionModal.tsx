import React, { useState } from 'react';
import { useField } from 'react-final-form';

import { Button, Box, SideMenuItem } from 'ui/atoms';
import { Modal, SubmitButton } from 'ui/molecules';
import { useLocale } from 'hooks';

import { ActionModalProps } from './ActionModal.types';
import { useStyles } from './ActionModal.styles';

export const ActionModal = ({
  title,
  isOpened,
  submitText,
  actions,
  onClose,
  handleSubmit,
  isLoading,
}: ActionModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  const { input } = useField<string>('operation');
  const [height, setHeight] = useState(10);

  return (
    <Modal title={title} isOpened={isOpened} onClose={onClose} fullWidth>
      <Box display="flex">
        <Box className={classes.list} height={height}>
          {actions.map(({ title, key }) => (
            <SideMenuItem
              key={key}
              title={title}
              selected={key === input.value}
              icon={<div />}
              onClick={() => input.onChange(key)}
            />
          ))}
        </Box>
        <div className={classes.rightPanel} ref={ref => setHeight(ref?.clientHeight ?? 0)}>
          <Box className={classes.content}>{actions.find(({ key }) => key === input.value)?.content}</Box>
          <Box className={classes.buttons}>
            <Button onClick={onClose} color="primary" variant="outlined">
              {formatMessage({ id: 'common.cancel' })}
            </Button>
            <SubmitButton isLoading={isLoading} onClick={handleSubmit} color="primary" variant="contained">
              {submitText}
            </SubmitButton>
          </Box>
        </div>
      </Box>
    </Modal>
  );
};
