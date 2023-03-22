
export const state = () => ({
  hasAccessCode: undefined,
  accessCode: '',
  hasAccessToken: undefined,
  accessToken: '',
  lifeTimeToken: -1,
});

export const getters = {
  getAccessToken(state) {
    return state.accessToken;
  },
  getAccessCode(state) {
    return state.accessCode;
  },
  getHasAccessToken(state){
    return state.hasAccessToken;
  },
  getHasAccessCode(state){
    return state.hasAccessToken;
  },
  getLifeTimeToken(state){
    return state.lifeTimeToken;
  }
}

export const mutations = {
  updateCode(state,val){
    state.accessCode = val;
    this.commit('auth/updateHasCode',!!val);
  },
  updateHasCode(state,val){
    state.hasAccessCode=val;
  },
  updateAccessToken(state,val){
    state.accessToken = val;
    this.commit('auth/updateHasAccesstoken',!!val);
  },
  updateHasAccesstoken(state,val){
    state.hasAccessToken=val;
  },
  updateLifeTimeToken(state,val){
    state.lifeTimeToken=val;
  }
}
