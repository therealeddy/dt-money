import React from 'react'

import { Header, Summary } from '../../components'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import SearchForm from './components/SearchForm'

const Transactions: React.FC = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td>Tipo da transacao</td>
              <td>
                <PriceHighlight variant="income">10</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>Data</td>
            </tr>
            <tr>
              <td>Tipo da transacao 2</td>
              <td>
                <PriceHighlight variant="outcome">- 10</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>Data</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
