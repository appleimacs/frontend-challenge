/**
 * @jest-environment jsdom
 */
/* eslint-disable no-console */

import { render, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        count: 1,
        next: null,
        previous: null,
        results: [
          {
            name: 'Name',
            climate: 'climate',
            population: '10',
          },
        ],
      }),
  }).catch((err) => console.log(err.toString())),
) as jest.Mock

describe('App test', () => {
  test('full app rendering/navigation', async () => {
    const { getByTestId } = await act(async () => render(<App />, { wrapper: MemoryRouter }))
    const container = getByTestId('test-container')

    await waitFor(() => {
      expect(container).toBeInTheDocument()
    })
  })
})
