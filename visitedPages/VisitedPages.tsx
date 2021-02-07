import React from 'react';

import { Card, CardHeader, CardContent, CardActions, Button } from '../../atoms';
import { useLocale } from 'hooks/useLocale/useLocale';

import { useStyles } from './VisitedPages.styles';
import { VisitedPagesProps } from './VisitedPages.types';

export const VisitedPages = ({ children, onMoreClick, opened }: VisitedPagesProps) => {
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader title={formatMessage({ id: 'visited_pages.title' })} />
      <CardContent className={classes.card}>{children}</CardContent>
      {onMoreClick && (
        <CardActions>
          <Button fullWidth onClick={onMoreClick}>
            {formatMessage({ id: opened ? 'visited_pages.view_less' : 'visited_pages.view_more' })}
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
