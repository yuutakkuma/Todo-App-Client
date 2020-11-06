import React, { FC } from 'react'

import { Container, Bar } from './style'
import { Props } from './type'

const SideBar: FC<Props> = ({ className, isOpen, onClick, children }) => (
  <>
    <Container className={className} onClick={onClick} isOpen={isOpen}>
      <Bar onClick={event => event.stopPropagation()} isOpen={isOpen}>
        {children}
      </Bar>
    </Container>
  </>
)

export default SideBar
