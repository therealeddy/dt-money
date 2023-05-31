import React from 'react'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
