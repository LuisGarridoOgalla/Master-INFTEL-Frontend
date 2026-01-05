import React from 'react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { render, screen, fireEvent } from '@testing-library/react';

describe('ConfirmationDialogComponent', () => {
  const defaultProps = {
    isOpen: true,
    onAccept: vi.fn(),
    onClose: vi.fn(),
    title: 'Confirm Action',
    labels: {
      closeButton: 'Cancel',
      acceptButton: 'Confirm',
    },
    children: <div>Are you sure you want to proceed?</div>,
  };

  it('should render correctly when open', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    expect(screen.getByText('Confirm Action')).toBeInTheDocument();
    expect(
      screen.getByText('Are you sure you want to proceed?')
    ).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('should call onClose when Cancel button is clicked', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    fireEvent.click(screen.getByText('Cancel'));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onAccept and onClose when Confirm button is clicked', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    fireEvent.click(screen.getByText('Confirm'));
    expect(defaultProps.onAccept).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should not render when isOpen is false', () => {
    render(<ConfirmationDialogComponent {...defaultProps} isOpen={false} />);
    expect(screen.queryByText('Confirm Action')).not.toBeInTheDocument();
  });
});
