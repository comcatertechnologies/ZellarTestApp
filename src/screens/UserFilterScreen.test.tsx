import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { MockedProvider } from '@apollo/client/testing';
import UserFilterScreen from './UserFilterScreen';
import { LIST_ZELLER_CUSTOMERS } from '../graphql/queries';

const mockData = {
  listZellerCustomers: {
    items: [
      { id: '1', name: 'Alice Johnson', role: 'ADMIN' },
      { id: '2', name: 'Bob Smith', role: 'ADMIN' },
      { id: '3', name: 'Charlie Brown', role: 'MANAGER' },
    ],
  },
};

const mocks = [
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {
        filter: { role: { eq: 'ADMIN' } },
      },
    },
    result: {
      data: mockData,
    },
  },
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
      variables: {
        filter: { role: { eq: 'MANAGER' } },
      },
    },
    result: {
      data: {
        listZellerCustomers: {
          items: [
            { id: '3', name: 'Charlie Brown', role: 'MANAGER' },
          ],
        },
      },
    },
  },
  {
    request: {
      query: LIST_ZELLER_CUSTOMERS,
    },
    error: new Error('Query error'),
  },
];

describe('UserFilterScreen', () => {
  it('renders loading indicator while data is being fetched', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserFilterScreen />
      </MockedProvider>
    );

    expect(getByTestId('loading-indicator')).toBeTruthy();
  });

  it('renders user list after data is loaded', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserFilterScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeTruthy();
      expect(getByText('Bob Smith')).toBeTruthy();
    });
  });

  it('displays error message on query error', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserFilterScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText(/Error: Query error/)).toBeTruthy();
    });
  });

  it('filters users based on search input', async () => {
    const { getByText, getByPlaceholderText, queryByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserFilterScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeTruthy();
      expect(getByText('Bob Smith')).toBeTruthy();
    });

    const searchInput = getByPlaceholderText('Search by name...');
    fireEvent.changeText(searchInput, 'Alice');

    expect(getByText('Alice Johnson')).toBeTruthy();
    expect(queryByText('Bob Smith')).toBeNull();
  });

  it('changes user role when a radio button is selected', async () => {
    const { getByText, getByTestId } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <UserFilterScreen />
      </MockedProvider>
    );

    await waitFor(() => {
      expect(getByText('Alice Johnson')).toBeTruthy();
      expect(getByText('Bob Smith')).toBeTruthy();
    });

    const managerRadioButton = getByTestId('radio-button-MANAGER');
    fireEvent.press(managerRadioButton);

    await waitFor(() => {
      expect(getByText('Charlie Brown')).toBeTruthy();
      expect(getByText('Manager Users')).toBeTruthy();
    });
  });
});
