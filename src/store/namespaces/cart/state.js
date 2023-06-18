export const state = {
  carts: {},
  currentCartId: null,
  cartPerPage: 10,
  totalRecords: 10,
  activePage: 1,
  cartsList: state =>
    Object.values(state.carts)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.cartPerPage)
}