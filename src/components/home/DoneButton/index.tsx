import React, { FC } from 'react'

import { Button } from './style'
import { Props } from './type'

const DoneButton: FC<Props> = ({ title, disabled, onClick }) => (
  <Button type='button' title={title} disabled={disabled} onClick={onClick} />
)

export default DoneButton
