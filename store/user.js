export const state = () =>({
  currentUser: {}
});
export const getters = {
  getCurrentUser: state => state.currentUser,
}
export const mutations = {
  replaceCurrentUser(state,val){
    state.currentUser = val;
  },
  updateCurrentUser(state,val){
    state.currentUser = {...state.currentUser,...val};
  }
}