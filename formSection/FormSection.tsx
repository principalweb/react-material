import React, { forwardRef, useImperativeHandle, useState } from 'react';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { useLocale } from 'hooks';
import { Card, Collapse, Typography, Box, FormControlLabel, Switch, IconButton } from 'ui/atoms';
import { AddIcon, MenuIcon, ManageIcon, EditIcon } from 'ui/atoms/icons';
import { ArrowDownIcon } from 'ui/atoms/icons/arrowDown/ArrowDownIcon';

import { FormSectionProps, FormSectionRef, FunctionChildren } from './FormSection.types';
import { useStyles } from './FormSection.styles';

export const FormSection = forwardRef<FormSectionRef, FormSectionProps>(
  (
    {
      title,
      isEditable = true,
      onAdd,
      onOptionsClick,
      onSettingsClick,
      onEditClick,
      isExpandable,
      isInitExpanded = false,
      children,
      className,
      titleBadge,
      buttons,
      isInitEditing = false,
      loading = false,
    },
    ref,
  ) => {
    const { formatMessage } = useLocale();
    const { state } = useLocation<{ newlyAdded?: boolean }>();
    const [expanded, setExpanded] = useState(
      !isExpandable || (isExpandable && isInitExpanded) || (isExpandable && !!state?.newlyAdded) || isInitEditing,
    );
    const [editing, setEditing] = useState(isInitEditing || !!state?.newlyAdded);
    const classes = useStyles({ bordered: editing });

    const handleSetEdit = (isEdititng: boolean) => {
      isEdititng && setExpanded(true);
      setEditing(isEdititng);
    };

    useImperativeHandle(ref, () => ({
      handleSetEdit: (value: boolean) => {
        handleSetEdit(value);
      },
      handleSetExpanded: (value: boolean) => {
        setExpanded(value);
      },
    }));

    return (
      <Card className={classNames(classes.root, className)}>
        <Box p={2}>
          <Box className={classNames(classes.header, { 'edit-mode': editing })}>
            <Typography variant="h2" className={classNames(classes.title, 'form-section-title')}>
              {title}
              {titleBadge !== undefined && (
                <div className={classes.titleBadge}>{titleBadge === 0 ? '-' : titleBadge}</div>
              )}
            </Typography>
            <Box className={classes.actions}>
              {buttons}
              {isEditable && (
                <FormControlLabel
                  className={classes.editLabel}
                  value="start"
                  control={<Switch checked={editing} onChange={() => handleSetEdit(!editing)} color="primary" />}
                  label={formatMessage({ id: 'form_section.edit_mode' })}
                  labelPlacement="start"
                />
              )}
              {onEditClick && (
                <IconButton className={classes.options} variant="rounded" size="small" onClick={onEditClick}>
                  <EditIcon color="inherit" />
                </IconButton>
              )}
              {onOptionsClick && (
                <IconButton className={classes.options} variant="rounded" size="small" onClick={onOptionsClick}>
                  <MenuIcon color="inherit" />
                </IconButton>
              )}
              {onSettingsClick && (
                <IconButton className={classes.options} variant="rounded" size="small" onClick={onSettingsClick}>
                  <ManageIcon color="inherit" />
                </IconButton>
              )}
              {onAdd && (
                <IconButton
                  color="primary"
                  size="small"
                  className="form-section-add"
                  onClick={onAdd}
                  disabled={(isEditable && !editing) || loading}
                >
                  <AddIcon color="inherit" />
                </IconButton>
              )}
              {isExpandable && (
                <IconButton
                  className={classNames({ 'icon-reversed': expanded })}
                  variant="roundedContained"
                  size="small"
                  onClick={() => setExpanded(expanded => !expanded)}
                >
                  <ArrowDownIcon color="inherit" />
                </IconButton>
              )}
            </Box>
          </Box>
          <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.content}>
            {typeof children === 'function' ? (children as FunctionChildren)(editing) : children}
          </Collapse>
        </Box>
      </Card>
    );
  },
);
