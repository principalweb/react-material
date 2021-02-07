import React from 'react';
import { Form } from 'react-final-form';

import { ActionModalFormProps } from './ActionModal.types';
import { ActionModal } from './ActionModal';

export const ActionModalForm = ({ actions, onSubmit, initialValues, ...props }: ActionModalFormProps) => {
  if (initialValues === null) {
    return null;
  }

  return (
    <Form onSubmit={onSubmit} initialValues={{ ...initialValues, operation: actions[0].key }}>
      {({ handleSubmit, submitting }) => (
        <ActionModal actions={actions} {...props} handleSubmit={handleSubmit} isLoading={submitting} />
      )}
    </Form>
  );
};
