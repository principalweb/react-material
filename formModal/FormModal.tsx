import React from 'react';
import { Form } from 'react-final-form';

import { CancelButton, Modal, SubmitButton } from 'ui/molecules';
import { Alert, DialogActions, DialogContent } from 'ui/atoms';
import { useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { FormModalProps } from 'ui/organisms/formModal/FormModal.types';

import { useStyles } from './FormModal.styles';

export const FormModal: <T>(p: FormModalProps<T>) => React.ReactElement<FormModalProps<T>> = ({
  isOpened,
  onClose,
  onSubmit,
  children,
  title,
  addText,
  addIcon,
  initialValues,
  mutators,
}) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal fullWidth isOpened={isOpened} onClose={onClose} title={title} className={classes.modal}>
      <Form initialValues={initialValues} onSubmit={onSubmit} mutators={mutators}>
        {({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>{children}</DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={addIcon ?? <AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {addText ?? formatMessage({ id: 'common.add' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
