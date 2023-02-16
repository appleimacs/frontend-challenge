/* @jest-environment jsdom *//* eslint-disable prettier/prettier */
import Planet from './Planet'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

describe('Planet test', ()=>{
    test('Planet is displayed', ()=> {
        const { getByTestId } = render(<Planet {...{name: 'Name', climate: 'Climate', population: 'Population'}} />)
        const planet = getByTestId('test-planet')
        expect(planet).toBeInTheDocument();
    })
})
