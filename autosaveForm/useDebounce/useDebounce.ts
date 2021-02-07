import { useRef, useCallback } from 'react';

export function useDebounce<T>(callback: (values: T) => void, delay: number): [(values: T) => void] {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const initialized = useRef<boolean>(false);

  const handleChange = useCallback(
    (values: T) => {
      if (!initialized.current) {
        callback(values);
        initialized.current = true;
      }

      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(values);

        timer.current = null;
      }, delay);
    },
    [callback, delay],
  );

  return [handleChange];
}
