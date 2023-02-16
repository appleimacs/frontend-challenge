/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react'
import { PlanetType, ResponseType } from '../../declarations'
import Planet from '../planet/Planet'

const Wrapper = () => {
  const [planets, setPlanets] = useState<PlanetType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [page, setPage] = useState<string>(`https:swapi.dev/api/planets/`)
  const [next, setNext] = useState<string>('')
  const [prev, setPrev] = useState<string>('')

  const fetchPlanets = async (url: string) => {
    const response: ResponseType = await fetch(url)
      .then((res) => {
        return res.json()
      })
    setPlanets(response.results)
    setNext(response.next || '')
    setPrev(response.previous || '')
    setLoading(false)
  }

  const updatePage = (url: string) => {
    setPage(url)
  }

  useEffect(() => {
    setLoading(true)
    fetchPlanets(page)
  }, [page])

  return (
    <div data-testid='test-wrapper'>
      {loading && <b>...Loading...</b>}
      {planets.map((planet: PlanetType, index: number) => {
        return <Planet {...planet} key={`planet-${index}`} />
      })}
      <button 
        data-testid='test-prev'
        disabled={prev === '' && true} 
        onClick={() => {updatePage(prev)}} >
        Previous
      </button>
      <button
        data-testid='test-next'
        disabled={next === '' && true}
        onClick={() => {updatePage(next)}} >
        Next
      </button>
    </div>
  )
}

export default Wrapper
