import { renderHook } from '@testing-library/react-hooks';

import { useDebounce } from './useDebounce';

jest.useFakeTimers();

describe('useDebounce', () => {
  it('invokes callback immediatelly with initial value', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useDebounce<string>(fn, 1000));
    const [handleChange] = result.current;

    handleChange('foo');

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith('foo');
  });

  it('invokes callback after the delay', () => {
    const fn = jest.fn();
    const { result } = renderHook(() => useDebounce<string>(fn, 1000));
    const [handleChange] = result.current;

    handleChange('foo');
    handleChange('bar');
    handleChange('baz');
    handleChange('bak');

    jest.runAllTimers();

    expect(fn).toBeCalledTimes(2);
  });
});
