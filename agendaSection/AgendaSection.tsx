import groupBy from 'lodash/groupBy';
import React, { useState } from 'react';
import { DateTime } from 'luxon';

import { Card, CardContent, CardActions, IconButton, Button, Tabs, Tab, AgendaItem, Scrollable } from 'ui/atoms';
import { AddIcon } from 'ui/atoms/icons/add/AddIcon';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AgendaItemProps } from 'ui/atoms/agendaItem/AgendaItem.types';
import { GroupTitle } from 'ui/organisms';

import { useStyles } from './AgendaSection.styles';
import { AgendaSectionProps } from './AgendaSection.types';

export const AgendaSection = ({ data, onMoreClick, onAddClick }: AgendaSectionProps) => {
  const { formatMessage } = useLocale();
  const [activeTab, setActiveTab] = useState(0);
  const classes = useStyles();
  const dateFormat = 'd LLLL';

  const grouped = groupBy(data, AgendaItem => {
    return DateTime.fromISO(AgendaItem.startDate).toFormat(dateFormat);
  });

  const sortedByDate = Object.keys(grouped).sort((dateA, dateB) => {
    return DateTime.fromString(dateA, dateFormat) > DateTime.fromString(dateB, dateFormat) ? 1 : -1;
  });

  const getGroupAgendaItems = (items: AgendaItemProps[]) => {
    return items.map((itemProps, key) => <AgendaItem key={key} {...itemProps} />);
  };

  return (
    <Card>
      <Tabs
        className={classes.tabs}
        onChange={(e, value) => setActiveTab(value)}
        value={activeTab}
        indicatorColor="primary"
        variant="fullWidth"
      >
        <Tab label="Agenda" />
        <Tab label="Tasks" />
      </Tabs>
      <CardContent>
        <Scrollable className={classes.scrollable} width="auto" height={342}>
          {sortedByDate.map((dateGroup, key) => {
            return (
              <div className={classes.group} key={key}>
                <GroupTitle date={dateGroup} dateFormat={dateFormat} />
                {getGroupAgendaItems(grouped[dateGroup])}
              </div>
            );
          })}
        </Scrollable>
      </CardContent>
      <CardActions>
        <Button fullWidth className={classes.moreButton} onClick={onMoreClick}>
          {formatMessage({ id: 'date.view_more' })}
        </Button>
        <IconButton aria-label="add" color="primary" size="small" onClick={onAddClick}>
          <AddIcon color="inherit" />
        </IconButton>
      </CardActions>
    </Card>
  );
};
