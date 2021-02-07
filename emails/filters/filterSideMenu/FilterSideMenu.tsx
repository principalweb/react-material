import React, { useCallback, useEffect, useState } from 'react';

import { useLocale } from 'hooks';
import { useStyles } from '../Filters.styles';
import { SideMenuItem } from 'ui/atoms';
import { FilterSidenavProps, FiltersTypes } from '../Filters.types';
import { SideMenu } from 'ui/molecules/sideMenu/SideMenu';

export const FilterSideMenu = ({ filters, onChange, selectedFilters }: FilterSidenavProps) => {
  const { formatMessage } = useLocale();
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = useCallback(
    (index: number) => {
      setValue(index);
      onChange(index);
    },
    [onChange, setValue],
  );

  useEffect(() => {
    handleTabChange(value);
  }, [value, handleTabChange]);

  return (
    <SideMenu>
      {filters.map((item: FiltersTypes, i) => {
        return (
          <SideMenuItem
            className={classes.filterTab + ' email-side-menu-item'}
            key={i}
            title={formatMessage({ id: 'filters.' + item.key + '.title' })}
            selected={i === value}
            onClick={() => handleTabChange(i)}
          />
        );
      })}
    </SideMenu>
  );
};
