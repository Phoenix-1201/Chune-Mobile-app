import { _ } from 'vue-underscore'

export const getTotalTransactions = async ({ state, effects }) => {
  const { transactions } = await effects.gql.queries.transactions()

  state.transactions.totalRecords = transactions.length
}

export const getTransactions = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.transactions.transactionPerPage,
      skip: (state.transactions.activePage - 1) * state.transactions.transactionPerPage
    }
  }
  //
  const { transactions } = await effects.gql.queries.transactions(options)

  state.transactions.transactions = _.indexBy(transactions, 'id')
}

export const saveTransaction = async ({ effects }, data) => {
  return await effects.gql.mutations.saveTransaction(data)
}

export const onChangePage = async ({ state }, page) => {
  state.transactions.activePage = page
}

export const onTransactionAdded = ({ state }, data) => {
  state.transactions.push(data)
}
