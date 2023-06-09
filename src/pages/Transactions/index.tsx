import React from 'react'
import { useContextSelector } from 'use-context-selector'

import { Header, Summary } from '../../components'
import SearchForm from './components/SearchForm'

import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/transactions'
import { priceFormatter } from '../../utils/formatter'

const Transactions: React.FC = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={String(transaction.id)}>
                <td>{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
