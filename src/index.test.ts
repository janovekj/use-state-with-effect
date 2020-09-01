import { useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { withEffect } from '.';

test('effect', () => {
  const effect = jest.fn();
  const { result } = renderHook(() => withEffect(useState('test'), effect));

  // should not run on initialize
  expect(effect).not.toHaveBeenCalled();

  act(() => {
    result.current[1]('new value');
  });

  expect(result.current[0]).toBe('new value');
  expect(effect).toHaveBeenCalledWith('test', 'new value');
});
