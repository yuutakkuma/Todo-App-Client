import React, { FC } from 'react'

import { Button } from './style'
import { Props } from './type'

const FormButton: FC<Props> = ({ type, title, disabled, isLoading }) => (
  <Button type={type} title={title} disabled={disabled} isLoading={isLoading} />
)

export default FormButton
