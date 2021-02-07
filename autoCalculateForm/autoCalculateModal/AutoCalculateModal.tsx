import React, { useState } from 'react';

import { useLocale } from 'hooks';
import { Typography, DialogActions, Alert, DialogContent } from 'ui/atoms';
import { Modal, InfoSection, SubmitButton } from 'ui/molecules';

import { AutoCalculateModalProps } from './AutoCalculateModal.types';

export const AutoCalculateModal = ({
  isOpened,
  titleId,
  descriptionFirstId,
  descriptionSecondId,
  onSubmit,
  onClose,
}: AutoCalculateModalProps) => {
  const { formatMessage } = useLocale();

  const [submitting, setSubmitting] = useState(false);
  const [isError, setError] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(false);

    const result = await onSubmit();

    setSubmitting(false);

    if (result?.error) {
      setError(true);
    } else {
      onClose();
    }
  };

  return (
    <Modal fullWidth isOpened={isOpened} onClose={onClose} title={formatMessage({ id: titleId })}>
      {isError && (
        <DialogContent>
          <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
        </DialogContent>
      )}
      <InfoSection emoji="😬">
        <Typography variant="h3">
          {formatMessage({ id: descriptionFirstId }, { strong: msg => <strong>{msg}</strong> })}
        </Typography>
        <Typography variant="h3">
          {formatMessage({ id: descriptionSecondId }, { strong: msg => <strong>{msg}</strong> })}
        </Typography>
      </InfoSection>
      <DialogActions>
        <SubmitButton onClick={onClose} size="large" color="primary" variant="outlined">
          {formatMessage({ id: 'common.cancel' })}
        </SubmitButton>
        <SubmitButton
          onClick={handleSubmit}
          isLoading={submitting}
          type="submit"
          size="large"
          color="primary"
          variant="contained"
        >
          {formatMessage({ id: 'common.yes_i_want' })}
        </SubmitButton>
      </DialogActions>
    </Modal>
  );
};
