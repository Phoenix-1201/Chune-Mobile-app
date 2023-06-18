export const state = {
  transactions: {},
  currentTransactionId: null,
  transactionPerPage: 10,
  totalRecords: 10,
  activePage: 1,
  transactionsList: state =>
    Object.values(state.transactions)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.transactionPerPage)
}