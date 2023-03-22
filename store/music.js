export const state = () => ({
  currentSong: {},
  heroSong: {},
  listSongs: [],
});

export const getters = {
  getHeroSong: state => state.heroSong,
  getListSongs: state => state.listSongs,
  getCurrentSong: state => state.currentSong,
}

export const mutations = {
  updateCurrentSong(state, val) {
    state.currentSong = val;
  },
  updateHeroSong(state, val) {
    state.heroSong = val;
  },
  updateListSongs(state, val) {
    state.listSongs = val;
    if (val) {
      this.commit('music/updateHeroSong', val[0]);
    }
  },
  pushListSongs(state, val) {
    state.listSongs.push(val);
  },
  cleanListSongs(state, val) {
    state.listSongs = [];
  },

}