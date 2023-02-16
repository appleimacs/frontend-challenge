/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { PlanetType } from '../../declarations'

const Planet = ({ name, population, climate }: PlanetType) => {
  return (
    <>
      <p data-testid='test-planet'>
        <b>{name}</b> Population: {population}, Climate: {climate}
      </p>
    </>
  )
}

export default Planet
