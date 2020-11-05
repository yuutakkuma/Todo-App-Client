import React, { FC } from 'react'

import Loading from '../../Loading'

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
    {isLoading ? (
      <Loading width='20px' height='20px' circleColor='rgba(50, 190, 230, 1)' />
    ) : (
      title
    )}
  </Button>
)

export default BaseButton
