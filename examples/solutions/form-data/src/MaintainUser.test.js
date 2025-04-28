import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MaintainUser } from './MaintainUser';

describe('MaintainUser', () => {
  const mockSubmit = jest.fn();
  const mockPerson = {
    first: 'John',
    last: 'Doe',
    email: 'johndoe@example.com',
    cell: '555-1234',
    imageUrl: 'https://example.com/image.jpg',
  };

  beforeEach(() => {
    mockSubmit.mockClear();
  });

  test('renders with initial person data', () => {
    const { getByText, getByLabelText } = render(
      <MaintainUser person={mockPerson} onSubmit={mockSubmit} />
    );

    expect(getByText(`Editing ${mockPerson.first} ${mockPerson.last}`)).toBeInTheDocument();
    expect(getByLabelText('First Name:')).toHaveValue(mockPerson.first);
    expect(getByLabelText('Last Name:')).toHaveValue(mockPerson.last);
    expect(getByLabelText('Email:')).toHaveValue(mockPerson.email);
    expect(getByLabelText('Cell:')).toHaveValue(mockPerson.cell);
    expect(getByLabelText('Image URL:')).toHaveValue(mockPerson.imageUrl);
  });

  test('updates person data on form submit', () => {
    const { getByLabelText, getByText } = render(
      <MaintainUser person={mockPerson} onSubmit={mockSubmit} />
    );

    const updatedPerson = {
      ...mockPerson,
      first: 'Jane',
      last: 'Doe',
      email: 'janedoe@example.com',
      cell: '555-5678',
      imageUrl: 'https://example.com/new-image.jpg',
    };

    fireEvent.change(getByLabelText('First Name:'), { target: { value: updatedPerson.first } });
    fireEvent.change(getByLabelText('Last Name:'), { target: { value: updatedPerson.last } });
    fireEvent.change(getByLabelText('Email:'), { target: { value: updatedPerson.email } });
    fireEvent.change(getByLabelText('Cell:'), { target: { value: updatedPerson.cell } });
    fireEvent.change(getByLabelText('Image URL:'), { target: { value: updatedPerson.imageUrl } });
    fireEvent.click(getByText('Save'));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith(updatedPerson);
  });

  test('does not update person data on form cancel', () => {
    const { getByLabelText, getByText } = render(
      <MaintainUser person={mockPerson} onSubmit={mockSubmit} />
    );

    const updatedPerson = {
      ...mockPerson,
      first: 'Jane',
      last: 'Doe',
      email: 'janedoe@example.com',
      cell: '555-5678',
      imageUrl: 'https://example.com/new-image.jpg',
    };

    fireEvent.change(getByLabelText('First Name:'), { target: { value: updatedPerson.first } });
    fireEvent.change(getByLabelText('Last Name:'), { target: { value: updatedPerson.last } });
    fireEvent.change(getByLabelText('Email:'), { target: { value: updatedPerson.email } });
    fireEvent.change(getByLabelText('Cell:'), { target: { value: updatedPerson.cell } });
    fireEvent.change(getByLabelText('Image URL:'), { target: { value: updatedPerson.imageUrl } });
    fireEvent.click(getByText('Cancel'));

    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
