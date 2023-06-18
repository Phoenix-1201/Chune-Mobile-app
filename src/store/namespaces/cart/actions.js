import { _ } from 'lodash'

export const getTotalCarts = async ({ state, effects }) => {
  const { carts } = await effects.gql.queries.carts()

  state.carts.totalRecords = carts.length
}

export const getCarts = async ({ state, effects }, data) => {
  let options = {}
  if (data && data.options) options = data.options
  else if (data && data.all) options = {}
  else {
    options = {
      first: state.carts.cartPerPage,
      skip: (state.carts.activePage - 1) * state.carts.cartPerPage
    }
  }
  //
  const { carts } = await effects.gql.queries.carts(options)

  state.carts.carts = _.keyBy(carts, 'id')
}

export const saveCart = async ({ effects }, data) => {
  return await effects.gql.mutations.saveCart(data)
}

export const onChangePage = async ({ state }, page) => {
  state.carts.activePage = page
}

export const onCartAdded = ({ state }, data) => {
  state.carts.push(data)
}
