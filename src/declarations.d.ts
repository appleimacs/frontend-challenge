/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.jpg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

export interface PlanetType {
  name: string
  climate: string
  population: string
}

export interface ResponseType {
  count: number
  next: string
  previous: string
  results: PlanetType[]
}
