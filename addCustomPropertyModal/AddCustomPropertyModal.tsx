import React from 'react';
import { Form } from 'react-final-form';

import { GenericField } from 'form/fields';
import { CancelButton, IconPicker, Modal, SubmitButton } from 'ui/molecules';
import { Alert, Box, DialogActions, DialogContent, Grid } from 'ui/atoms';
import { iconPickerIcons, useLocale } from 'hooks';
import { AddIcon } from 'ui/atoms/icons';
import { requireValidator } from 'form/validators';

import { AddCustomPropertyModalProps } from './AddCustomPropertyModal.types';
import { useStyles } from './AddCustomPropertyModal.styles';

export const AddCustomPropertyModal = ({
  isOpened,
  onClose,
  onSubmit,
  title,
  labelId,
  iconPickerSelectedTheme,
  placeholderId,
  addText,
}: AddCustomPropertyModalProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();

  return (
    <Modal
      fullWidth
      isOpened={isOpened}
      onClose={onClose}
      title={title ?? formatMessage({ id: 'pim_details.specification.custom_property_modal.title' })}
      className={classes.modal}
    >
      <Form onSubmit={onSubmit}>
        {({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'add_pim.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <DialogContent>
              <Grid container spacing={2}>
                <Grid item xs={5} className={classes.col}>
                  <GenericField
                    name="text"
                    label={labelId ?? 'pim_details.specification.custom_property_modal.input_label'}
                    placeholder={placeholderId ?? 'pim_details.specification.custom_property_modal.input_placeholder'}
                    validate={[requireValidator]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box mb={1.5}>
                    <label>
                      {formatMessage({ id: 'pim_details.specification.custom_property_modal.icons_label' })}
                    </label>
                  </Box>
                  <IconPicker name="icon" iconList={iconPickerIcons} selectedTheme={iconPickerSelectedTheme} />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className={classes.actions}>
              <CancelButton variant="outlined" size="large" onClick={onClose}>
                {formatMessage({ id: 'common.cancel' })}
              </CancelButton>
              <SubmitButton
                type="submit"
                startIcon={<AddIcon color="inherit" />}
                size="large"
                color="primary"
                variant="contained"
                isLoading={submitting}
                disabled={!valid}
              >
                {addText ?? formatMessage({ id: 'pim_details.specification.custom_property_modal.submit_button' })}
              </SubmitButton>
            </DialogActions>
          </form>
        )}
      </Form>
    </Modal>
  );
};
