import React, { useState } from 'react';

import { Box, Collapse } from 'ui/atoms';
import { SubSectionHeader } from 'ui/molecules';

import { FormSubSectionProps } from './FormSubSection.types';
import { useStyles } from './FormSubSection.styles';

export const FormSubSection = ({
  title,
  children,
  onOptionsClick,
  counter,
  initiallyOpened = true,
  onExpand,
  isExpanded,
  customOption,
}: FormSubSectionProps) => {
  const [isOpened, setOpened] = useState(initiallyOpened);
  const classes = useStyles();

  const handleToggleClick = () => {
    if (onExpand) {
      onExpand();
    } else {
      setOpened(o => !o);
    }
  };

  return (
    <>
      <SubSectionHeader
        toggled={isExpanded || isOpened}
        onToggleClick={handleToggleClick}
        onOptionsClick={onOptionsClick}
        customOption={customOption}
      >
        <Box display="flex">
          {counter && <div className={classes.counter}>{counter}</div>}
          {title}
        </Box>
      </SubSectionHeader>
      <Collapse style={{ width: '100%' }} in={isExpanded || isOpened} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </>
  );
};
