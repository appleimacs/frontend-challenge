/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

import App from './App'

test('full app rendering/navigation', () => {
  render(<App />, { wrapper: MemoryRouter })
  expect(screen.getByText('Hello, world')).toBeInTheDocument()
})
