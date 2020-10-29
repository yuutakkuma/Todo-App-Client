import React, { FC } from 'react'

import { Button } from './style'
import { Props } from './type'

const BaseButton: FC<Props> = ({ title, onClick }) => (
  <Button onClick={onClick}>{title}</Button>
)

export default BaseButton
