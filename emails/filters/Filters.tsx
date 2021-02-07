import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { AnyObject } from 'final-form';

import { ComplexBuildingIcon } from 'ui/atoms/icons';
import { Box, Grid, Alert, DialogContent, DialogActions } from 'ui/atoms';
import { useLocale, useNylasAccountState } from 'hooks';
import { RadioGroupField } from 'form/fields';
import { Modal, SubmitButton } from 'ui/molecules';
import { CancelButton } from 'ui/molecules/cancelButton/CancelButton.styles';

import { FilterSideMenu } from './filterSideMenu/FilterSideMenu';
import { FilterProps, FiltersTypes } from './Filters.types';
import { FilterTabPanel } from './filterTabPanel/FilterTabPanel';
import { useStyles } from './Filters.styles';

enum Sizes {
  M = 6,
  L = 12,
}

enum Types {
  RadioButton = 'radioButton',
}

export const EmailDashboardFilters = ({
  data,
  isOpened,
  onClose,
  onSubmit,
  onTabChange,
  activeTab,
  onDeleteFilter,
}: FilterProps) => {
  const { formatMessage } = useLocale();
  const { emailAccounts: nylasAccounts } = useNylasAccountState();
  const filters: FiltersTypes[] = [
    {
      key: 'inbox',
      type: Types.RadioButton,
      size: Sizes.M,
      options: nylasAccounts.map(account => ({
        label: account.email,
        value: account.id,
        icon: <ComplexBuildingIcon />,
      })),
    },
  ];
  const classes = useStyles();

  const handleDeleteFilter = (deletedFilter: FiltersTypes, values: AnyObject) => {};

  return (
    <Modal
      fullWidth
      onClose={onClose}
      title={<span>{formatMessage({ id: 'emails.filters.title' })}</span>}
      isOpened={isOpened}
    >
      <Form
        onSubmit={onSubmit}
        initialValues={data}
        mutators={{ ...arrayMutators }}
        render={({ handleSubmit, submitErrors, submitting, valid, values }) => (
          <form onSubmit={handleSubmit} autoComplete="off">
            {submitErrors && submitErrors.error && (
              <DialogContent>
                <Alert severity="error">{formatMessage({ id: 'filter.error.unknown' })}</Alert>
              </DialogContent>
            )}
            <Grid container spacing={0} className={classes.filter}>
              <Grid item xs={4} className={classes.filterSider}>
                <FilterSideMenu selectedFilters={data} filters={filters} onChange={onTabChange} />
              </Grid>
              <Grid item xs={8}>
                <Box p={3} className={classes.filterContent}>
                  {filters.map((filter, i) =>
                    filter.type === Types.RadioButton && filter.options && filter.size ? (
                      <FilterTabPanel
                        filterType={filter.type}
                        key={filter.key}
                        activeTab={activeTab}
                        id={i}
                        onDeleteFilter={() => handleDeleteFilter(filter, values)}
                      >
                        <>
                          <RadioGroupField
                            options={filter.options}
                            name={filter.key}
                            xs={filter.size}
                            orientation="horizontal"
                          />
                        </>
                      </FilterTabPanel>
                    ) : null,
                  )}
                </Box>
                <Grid item xs={12} justify="space-between" className={classes.modalFooter}>
                  <DialogActions>
                    <CancelButton variant="outlined" size="large" onClick={onClose}>
                      {formatMessage({ id: 'common.cancel' })}
                    </CancelButton>
                    <SubmitButton
                      type="submit"
                      size="large"
                      color="primary"
                      variant="contained"
                      onClick={handleSubmit}
                      isLoading={submitting}
                      disabled={!valid}
                    >
                      {formatMessage({ id: 'common.apply_filter' })}
                    </SubmitButton>
                  </DialogActions>
                </Grid>
              </Grid>
            </Grid>
          </form>
        )}
      />
    </Modal>
  );
};
