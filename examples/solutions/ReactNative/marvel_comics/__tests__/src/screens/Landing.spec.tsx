import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { Landing } from '../../../src/screens/Landing';

describe('Landing screen', () => {
  it('should render', () => {
    const { getByTestId, getByText, queryByTestId, toJSON } = render(<Landing />)

    expect(true).toEqual(true);
  })
})