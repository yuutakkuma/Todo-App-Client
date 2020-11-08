import React, { FC, useState } from 'react'

import SideBar from './SideBar'

import { Container, Box, Button, Heading, Hambuger } from './style'
import { Props } from './type'

const Header: FC<Props> = ({ onLogoutClick, onAccountDeleteClick }) => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState<boolean>(false)
  return (
    <>
      <Container>
        <Hambuger onClick={() => setSideBarIsOpen(true)} />
        <SideBar isOpen={sideBarIsOpen} onClick={() => setSideBarIsOpen(false)}>
          <Button
            type='button'
            title='とじる'
            onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
            justifyContent='left'
          />
          <Button
            type='button'
            title='アカウント削除'
            onClick={onAccountDeleteClick}
            marginVertical='20px'
            justifyContent='left'
          />
          <Button
            type='button'
            title='ログアウト'
            onClick={onLogoutClick}
            marginVertical='20px'
            justifyContent='left'
          />
        </SideBar>
        <Box justifyContent='flex-start'>
          <Heading>TODO APP</Heading>
        </Box>
        <Box justifyContent='flex-end' mediaDisplay='none'>
          <Button
            type='button'
            title='アカウント削除'
            onClick={onAccountDeleteClick}
          />
          <Button
            marginHorizontal='20px'
            type='button'
            title='ログアウト'
            onClick={onLogoutClick}
          />
        </Box>
      </Container>
    </>
  )
}

export default Header
