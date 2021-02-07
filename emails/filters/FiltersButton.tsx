import React, { useCallback, useEffect, useState } from 'react';

import { IconButton } from 'ui/atoms';
import { ManageIcon } from 'ui/atoms/icons/manage/ManageIcon';

import { FilterButtonProps, EmailFilter } from './Filters.types';
import { EmailDashboardFilters } from './Filters';

export const EmailDashboardFiltersButton = ({ data, getActiveFilters }: FilterButtonProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (body: EmailFilter) => {
    const result = body;
    handleUpdate(result);

    setModalOpen(false);
  };

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  const handleUpdate = useCallback(
    (result: EmailFilter) => {
      if (getActiveFilters) {
        getActiveFilters(result);
      }
    },
    [getActiveFilters],
  );

  useEffect(() => {
    if (data) {
      handleUpdate(data);
    }
  }, [data, handleUpdate]);

  return (
    <>
      <IconButton aria-label="manage" size="small" variant="roundedContained" onClick={() => setModalOpen(true)}>
        <ManageIcon color="inherit" />
      </IconButton>
      <EmailDashboardFilters
        data={data}
        isOpened={isModalOpen}
        activeTab={activeTab}
        onSubmit={handleSubmit}
        onTabChange={handleTabChange}
        onDeleteFilter={handleUpdate}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
