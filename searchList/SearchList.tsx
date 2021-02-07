import React, { ChangeEvent, useEffect, useState, Fragment } from 'react';

import { Box, Grid, Typography } from 'ui/atoms';
import { InfoSection, SimpleSearch } from 'ui/molecules';
import { useLocale } from 'hooks';

import { useStyles } from './SearchList.styles';
import { SearchListProps } from './SearchList.types';

export const SearchList = <T extends { id: string } | undefined>({
  items,
  selectedItemsIds,
  item,
  filterItem,
  resultListLabel,
}: SearchListProps<T>) => {
  const { formatMessage } = useLocale();
  const [value, setValue] = useState('');
  const [filteredItems, setFilteredItems] = React.useState<T[]>(items);
  const [selectedItems, setSelectedItems] = React.useState<T[]>([]);
  const classes = useStyles();

  useEffect(() => {
    setValue('');
    setFilteredItems(items?.filter((i: T) => (i ? !selectedItemsIds.includes(i.id) : false)) ?? []);
    setSelectedItems(items.filter((i: T) => (i ? selectedItemsIds.includes(i.id) : false)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleChange = (v: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const currentValue = v.target.value;
    setValue(currentValue);

    filterProperties(currentValue);
  };

  const filterProperties = (currentValue: string) => {
    const results = items.filter(singleItem => filterItem(singleItem, currentValue));
    setFilteredItems(results);
  };

  const highlightString = (currentValue: string) => {
    if (!value.trim()) {
      return currentValue;
    }

    const parts = currentValue?.split(new RegExp(`(${value})`, 'gi'));

    return parts?.map((part, index) =>
      part.toLowerCase().match(value.toLowerCase()) ? (
        <span key={index} className={classes.highlight}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <SimpleSearch
          onChange={v => handleChange(v)}
          value={value}
          placeholderId="pim_details.specification.add_linked_property_modal.search_placeholder"
        />
      </Grid>
      {!!selectedItems.length && (
        <Grid item xs={12}>
          <label className={classes.listLabel}>
            {formatMessage({ id: 'pim_details.specification.add_linked_property_modal.current_label' })}
          </label>
          <Box mt={2} className={classes.list}>
            {selectedItems.map((singleItem: T, index: number) => (
              <Fragment key={`${singleItem?.id}_${index}`}>
                {item({ item: singleItem, isInitiallySelected: true, highlightString: highlightString })}
              </Fragment>
            ))}
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <label className={classes.listLabel}>
          {resultListLabel ?? formatMessage({ id: 'pim_details.specification.add_linked_property_modal.result_label' })}
        </label>
        <Box mt={2} className={classes.list}>
          {filteredItems.map((singleItem: T, index: number) => (
            <Fragment key={`${singleItem?.id}_${index}`}>
              {item({ item: singleItem, isInitiallySelected: false, highlightString: highlightString })}
            </Fragment>
          ))}
          {!filteredItems.length && (
            <InfoSection emoji="🤔">
              <Typography variant="h3">{formatMessage({ id: 'common.no_results' })}</Typography>
            </InfoSection>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};
