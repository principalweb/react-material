import React from 'react';

import { Card, CardHeader, CardContent, CardActions, IconButton, Button, Box } from '../../atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './Orders.styles';
import { OrdersProps } from './Orders.types';

export const Orders = ({ tabs, children, onAddClick, onMoreClick, onManageClick }: OrdersProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={formatMessage({ id: 'orders.title' })}
        action={
          <Box display="flex">
            <Box mr={3}>
              <IconButton aria-label="manage" size="small" variant="roundedContained" onClick={onManageClick}>
                <ManageIcon color="inherit" />
              </IconButton>
            </Box>
            <IconButton aria-label="add" color="primary" size="small" onClick={onAddClick}>
              <AddIcon color="inherit" />
            </IconButton>
          </Box>
        }
      />
      <CardContent className={classes.card}>
        {tabs}
        {children}
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={onMoreClick}>
          {formatMessage({ id: 'orders.view_more' })}
        </Button>
      </CardActions>
    </Card>
  );
};
