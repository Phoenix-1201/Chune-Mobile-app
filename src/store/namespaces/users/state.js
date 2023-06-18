export const state = {
  users: {},
  currentUserId: null,
  modalUser: null,
  isLoadingUsers: false,
  isLoadingUserDetails: false,
  currentUserModalTabIndex: 0,
  currentUser: null,
  // selectedUsersFilter
  // currentUsersByDate
  userShowCount: 10,
  usersList: state =>
    Object.values(state.users)
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1
        } else if (a.name < b.name) {
          return -1
        }

        return 0
      })
      .slice(0, state.userShowCount)
}