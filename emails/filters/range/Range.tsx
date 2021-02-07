import React from 'react';

import { GenericField } from 'form/fields';
import { Grid, InputAdornment } from 'ui/atoms';
import { useLocale } from 'hooks';

import { OptionDataType, RangeProps } from './Range.types';

export const Range = ({ name, options, suffix = '' }: RangeProps) => {
  const { formatMessage } = useLocale();

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        {options.map((item: OptionDataType) => (
          <GenericField
            name={`${name}_${item.label}`}
            label={formatMessage({ id: `${name}.from.label` })}
            placeholder={formatMessage({ id: `${name}.from.placeholder` })}
            size="medium"
            type="number"
            defaultValue={item.value}
            InputProps={{
              endAdornment: <InputAdornment position="end">{suffix}</InputAdornment>,
            }}
          />
        ))}
      </Grid>
    </Grid>
  );
};
