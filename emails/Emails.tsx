import React from 'react';
import { useTheme } from '@material-ui/core';

import { Card, CardHeader, CardContent, CardActions, Button, Typography, Placeholder, Box, Badge } from '../../atoms';
import { Email } from 'ui/molecules/email/Email';
import { useLocale } from 'hooks/useLocale/useLocale';
import { InfoSection } from 'ui/molecules';

import { useStyles } from './Emails.styles';
import { EmailsProps, EmailItem } from './Emails.types';
import { EmailDashboardFiltersButton } from './filters/FiltersButton';

export const Emails = ({ data, onEmailClick, onMoreClick, loading, activeFilters, onFilter }: EmailsProps) => {
  const theme = useTheme();
  const classes = useStyles();
  const { formatMessage } = useLocale();

  return (
    <Card>
      <CardHeader
        title={
          <Badge badgeContent={data.length} color="secondary" classes={{ badge: classes.badge }}>
            <Typography variant="h2">{formatMessage({ id: 'emails.title' })}</Typography>
          </Badge>
        }
        action={<EmailDashboardFiltersButton data={activeFilters} getActiveFilters={onFilter} />}
      />
      <CardContent className={classes.card}>
        {loading ? (
          <Box mt={2}>
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
            <Box mt={1.5} />
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
            <Box mt={1.5} />
            <Placeholder height={theme.spacing(2)} />
            <Box mt={0.5} />
            <Placeholder height={theme.spacing(1)} />
          </Box>
        ) : data.length ? (
          data.map((email: EmailItem) => (
            <Email
              name={email.name}
              avatar={email.avatar}
              title={email.title}
              date={email.date}
              open={email.open}
              onClick={id => onEmailClick(id)}
              id={email.id}
              key={email.id}
            >
              {email.children}
            </Email>
          ))
        ) : (
          <InfoSection emoji="🤔">
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.emails.empty_title',
              })}
            </Typography>
            <Typography variant="h3">
              {formatMessage({
                id: 'dashboard.emails.empty_description',
              })}
            </Typography>
          </InfoSection>
        )}
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={onMoreClick}>
          {formatMessage({ id: 'emails.view_all_emails' })}
        </Button>
      </CardActions>
    </Card>
  );
};
