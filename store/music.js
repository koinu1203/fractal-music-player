import { MusicService } from "~/services/music.service";

export const state = () => ({
  currentSong: {},
  heroSong: {},
  heroArtist: {},
  songList: [],
});

export const getters = {
  getHeroSong: state => state.heroSong,
  getHeroArtist: state => state.heroArtist,
  getSongList: state => state.songList,
  getCurrentSong: state => state.currentSong,
}

export const mutations = {
  updateCurrentSong(state, val) {
    state.currentSong = val;
  },
  updateHeroSong(state, val) {
    state.heroSong = val;
  },
  updateHeroArtist(state, val) {
    state.heroArtist = val;
  },
  updateSongList(state, val) {
    state.songList = val;
    if (val) {
      this.commit('music/updateHeroSong', val[0]);
      this.dispatch('music/setHeroArtist');
    }
  },
  pushSongList(state, val) {
    state.songList.push(val);
  },
  cleanSongList(state, val) {
    state.songList = [];
  },

}

export const actions = {
  async setHeroArtist({rootGetters,commit}){
    const musicService = new MusicService(rootGetters['auth/getAccessToken']);
    musicService.getArtistInfoById(rootGetters['music/getHeroSong'].artist?.id).then((val)=>{
      commit('updateHeroArtist',val.data);
    })
  }
 }