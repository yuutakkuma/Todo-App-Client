import React from 'react'

import {
  Character,
  CharacterError
} from './componentStyle/CharacterCount.style'

interface Props {
  value: string
  error: string
  reload: boolean
}

export const CharacterCount: React.FC<Props> = ({ value, reload, error }) => {
  const count = value.trim().length

  return (
    <Character style={{ color: count > 25 ? 'red' : 'blue' }}>
      {reload ? <CharacterError>{error}</CharacterError> : undefined}
      {count}/25
    </Character>
  )
}
