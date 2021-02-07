import React, { useRef, useCallback, useMemo, useState } from 'react';
import { Form, FormSpy } from 'react-final-form';

import { Snackbar, Alert } from 'ui/atoms';
import { useLocale } from 'hooks';

import { AutosaveProps, KeyValuesObject, FormObject, AutosaveFunctionChildren } from './AutosaveForm.types';
import { useDebounce } from './useDebounce/useDebounce';

const isEmpty = (obj: {} | null | undefined) => !obj || !Object.keys(obj).length;

const sanitize = (obj: object) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      return value === null || key === '__typename' ? undefined : value;
    }),
  );
};

export const AutosaveForm = ({ onSave, timeout = 1000, children, initialValues, ...props }: AutosaveProps) => {
  const [indicatorState, setIndicatorState] = useState<undefined | 'success' | 'error' | 'info'>(undefined);
  const previousValues = useRef<KeyValuesObject<string | number> | null>(null);
  const { formatMessage } = useLocale();

  const initial = useMemo(() => {
    return initialValues ? sanitize(initialValues) : undefined;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDebounced = useCallback(
    async ({ values }) => {
      if (
        !isEmpty(values) &&
        !!previousValues.current &&
        JSON.stringify(values) !== JSON.stringify(previousValues.current)
      ) {
        setIndicatorState('info');

        const result = await onSave(values);

        if (result && result.error) {
          setIndicatorState('error');
        } else {
          setIndicatorState('success');
        }
      }

      previousValues.current = values;
    },
    [onSave],
  );

  const [debouncedCallback] = useDebounce<FormObject<string | number>>(handleDebounced, timeout);

  return (
    <Form onSubmit={() => {}} {...props} initialValues={initial}>
      {form => (
        <>
          {typeof children === 'function' ? (children as AutosaveFunctionChildren)(form) : children}
          <FormSpy subscription={{ values: true }} onChange={debouncedCallback} />
          <Snackbar
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            open={!!indicatorState}
            autoHideDuration={6000}
            onClose={() => setIndicatorState(undefined)}
          >
            <Alert variant="filled" severity={indicatorState}>
              {formatMessage({ id: 'common.autosaving' })}
            </Alert>
          </Snackbar>
        </>
      )}
    </Form>
  );
};
