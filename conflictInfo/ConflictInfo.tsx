import React from 'react';
import { useForm, useFormState } from 'react-final-form';

import { InfoSection, SubmitButton } from 'ui/molecules';
import { DialogActions, Typography } from 'ui/atoms';
import { ConflictInfoProps } from 'ui/organisms/conflictInfo/ConflictInfo.types';

import { useStyles } from './ConflictInfo.styles';

export const ConflictInfo = ({ onCancel, messageLineFirst, messageLineSecond, cancel, confirm }: ConflictInfoProps) => {
  const { submitting } = useFormState({
    subscription: { submitting: true },
  });
  const { change } = useForm();
  const classes = useStyles();

  return (
    <>
      <InfoSection emoji="😲" className={classes.info}>
        <Typography variant="h3">{messageLineFirst}</Typography>
        <Typography variant="h3">{messageLineSecond}</Typography>
      </InfoSection>
      <DialogActions>
        <SubmitButton onClick={onCancel} size="large" color="primary" variant="outlined">
          {cancel}
        </SubmitButton>
        <SubmitButton
          onClick={() => change('forceAdd', true)}
          isLoading={submitting}
          type="submit"
          size="large"
          color="primary"
          variant="outlined"
        >
          {confirm}
        </SubmitButton>
      </DialogActions>
    </>
  );
};
