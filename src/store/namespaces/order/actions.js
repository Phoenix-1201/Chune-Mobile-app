import { _ } from 'lodash'

export const getTotalOrders = async ({ state, effects }) => {
  const { orders } = await effects.gql.queries.orders()

  state.orders.totalRecords = orders.length
}

export const getOrders = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.orders.orderPerPage,
      skip: (state.orders.activePage - 1) * state.orders.orderPerPage
    }
  }
  //
  const { orders } = await effects.gql.queries.orders(options)

  state.orders.orders = _.keyBy(orders, 'id')
}

export const saveOrder = async ({ effects }, data) => {
  return await effects.gql.mutations.saveOrder(data)
}

export const onChangePage = async ({ state }, page) => {
  state.orders.activePage = page
}

export const onOrderAdded = ({ state }, data) => {
  state.orders.push(data)
}
