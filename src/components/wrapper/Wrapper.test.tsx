/* @jest-environment jsdom *//* eslint-disable prettier/prettier */
/* eslint-disable no-console */
import Wrapper from './Wrapper'
import '@testing-library/jest-dom'
import { render, fireEvent, act, waitFor } from '@testing-library/react'

global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=>
            Promise.resolve({
                count: 1,
                next: 'page2',
                previous: 'page4',
                results: [
                    {
                        name: "Name",
                        climate: "climate",
                        population: "10"
                    }
            ]}),
    }).catch((err) => console.log(err.toString()))
) as jest.Mock

describe('Wrapper test', ()=>{
    test('Wrapper displays loading', async()=> {
        const { getByTestId, getByText, queryByText } = render(<Wrapper />)
        expect(getByText("...Loading...")).toBeInTheDocument();
        
        const next = getByTestId('test-next')
        const prev = getByTestId('test-prev')
        expect(next).toHaveProperty('disabled', true);
        expect(prev).toHaveProperty('disabled', true);
    
        await waitFor(()=>{
            expect(queryByText("...Loading...")).not.toBeInTheDocument();
        })
    })
    test('Wrapper fetches and displays content', async()=> {
        const { getByTestId } = await act(async ()=>render(<Wrapper />))
        const wrapper = getByTestId('test-wrapper')
        await waitFor(()=>{
            expect(wrapper).toBeInTheDocument();
        })
    })
    test('prev click fetches data', async()=> {
        const { getByTestId } = await act(async ()=>render(<Wrapper />))
        const prev = getByTestId('test-prev')

        const spy = jest.fn()
        prev.addEventListener('click', spy)
        fireEvent.click(prev)

        await act(()=> fetch)
        expect(spy).toBeCalledTimes(1)
    })
    test('next click fetches data', async()=> {
        const { getByTestId } = await act(async ()=>render(<Wrapper />))
        const next = getByTestId('test-next')

        const spy = jest.fn()
        next.addEventListener('click', spy)
        fireEvent.click(next)

        await act(()=> fetch)
        expect(spy).toBeCalledTimes(1)
    })
    test('prev is disabled', async()=> {
        const { getByTestId } = await act(async()=>render(<Wrapper />))
        const prev = getByTestId('test-prev')
        
        await waitFor(()=>{
            expect(prev).toHaveProperty('disabled', false);
        })
    })
    test('next is disabled', async()=> {
        const { getByTestId } = await act(async()=>render(<Wrapper />))
        const next = getByTestId('test-next')

        await waitFor(()=>{
            expect(next).toHaveProperty('disabled', false);
        })
    })
    test('Wrapper fetch failed', async()=> {
        await act(async ()=>render(<Wrapper />))
        const fakeFetch = jest.fn()
        window.fetch = fakeFetch;
        fakeFetch.mockImplementationOnce(()=>{throw new Error()})
        expect(fakeFetch).toThrow(Error)
    })
})
