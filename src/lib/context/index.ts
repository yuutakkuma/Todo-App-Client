import { createContext } from 'react'

interface State {
  height: number
}

const height = window.innerHeight

export const Context = createContext<State>({ height })
