import React, { useState } from 'react';

import { ConfirmButtonType } from 'ui/molecules/confirmModal/ConfirmModal.types';
import { ConfirmModal } from 'ui/molecules';
import { useLocale } from 'hooks';
import { BulkOperations } from 'api/types';

import { BulkActionConfigMapType, BulkActionConfirmModalProps } from './BulkActionConfirmModal.types';
import { useStyles } from './BulkActionConfirmModal.styles';

export const BulkActionConfirmModal = ({
  isOpened,
  onCancel,
  onConfirm,
  count,
  itemName,
  type,
}: BulkActionConfirmModalProps) => {
  const { formatMessage } = useLocale();
  const [isBulkActionLoading, setBulkActionLoading] = useState(false);
  const classes = useStyles();

  const bulkActionConfigMap: Record<string, BulkActionConfigMapType> = {
    [BulkOperations.Delete]: {
      messageLineFirst: formatMessage(
        { id: 'bulk_actions.delete.message_line_1' },
        { count, name: itemName, span: msg => <span className={classes.deleteWarning}>{msg}</span> },
      ),
      messageLineSecond: formatMessage({ id: 'bulk_actions.delete.message_line_2' }),
      cancelText: formatMessage({ id: 'bulk_actions.delete.cancel' }),
      confirmText: formatMessage({ id: 'bulk_actions.delete.confirm' }, { count }),
      title: formatMessage({ id: 'bulk_actions.delete.title' }, { count }),
      emoji: '😬',
      confirmButtonType: ConfirmButtonType.ERROR,
    },
    [BulkOperations.Archive]: {
      messageLineFirst: formatMessage(
        { id: 'bulk_actions.archive.message_line_1' },
        { count, name: itemName, span: msg => <span className={classes.deleteWarning}>{msg}</span> },
      ),
      messageLineSecond: undefined,
      cancelText: formatMessage({ id: 'bulk_actions.archive.cancel' }),
      confirmText: formatMessage({ id: 'bulk_actions.archive.confirm' }, { count }),
      title: formatMessage({ id: 'bulk_actions.archive.title' }, { count }),
      emoji: '🗃',
      confirmButtonType: ConfirmButtonType.INFO,
    },
  };

  const handleConfirm = async () => {
    setBulkActionLoading(true);
    await onConfirm();
    setBulkActionLoading(false);
  };

  return (
    <ConfirmModal
      isOpened={isOpened}
      isLoading={isBulkActionLoading}
      onCancel={onCancel}
      onConfirm={handleConfirm}
      {...bulkActionConfigMap[type as string]}
    />
  );
};
