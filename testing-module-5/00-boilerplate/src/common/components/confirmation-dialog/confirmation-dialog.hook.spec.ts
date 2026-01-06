import React from 'react';
import { renderHook, act } from '@testing-library/react'
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });

  it('should open the dialog and set item to delete', () => {
    const { result } = renderHook(() => useConfirmationDialog());
    const item = { id: '1', name: 'Item 1' };

    act(() => {
      result.current.onOpenDialog(item);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should close the dialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Item 1' });
      result.current.onClose();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it('should accept and reset item to delete', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog({ id: '1', name: 'Item 1' });
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual({ id: '', name: '' });
  });
});
