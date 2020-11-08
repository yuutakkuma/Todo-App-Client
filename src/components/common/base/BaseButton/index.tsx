import React, { FC } from 'react'

import Loading from '../../Loading'
import { LoadingMode } from '../../Loading/type'

import { Button } from './style'
import { Props } from './type'

const BaseButton: FC<Props> = ({
  type,
  title,
  disabled,
  className,
  isLoading,
  onClick
}) => (
  <Button
    type={type}
    className={className}
    disabled={disabled}
    onClick={onClick}
  >
    {isLoading ? <Loading mode={LoadingMode.SMALL} /> : title}
  </Button>
)

export default BaseButton
