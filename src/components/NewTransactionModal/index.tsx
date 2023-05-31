import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay } from './styles'
import { X } from 'phosphor-react'

const NewTransactionModal: React.FC = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />
        </form>

        <button type="submit">Cadastrar</button>
      </Content>
    </Dialog.Portal>
  )
}

export default NewTransactionModal
