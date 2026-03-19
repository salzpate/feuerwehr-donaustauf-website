import { act, renderHook } from '@testing-library/react';

import { useIsMounted } from './useIsMounted';

describe('useIsMounted', () => {
  it('gibt true zurück nach dem Mount', async () => {
    const { result } = renderHook(() => useIsMounted());

    await act(async () => {});

    expect(result.current).toBe(true);
  });
});
