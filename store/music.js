import { MusicService } from "~/services/music.service";
const configEnv = require('../nuxt.config.js').default;
const apiConfig = configEnv.dev? configEnv.env.apiDev: configEnv.env.apiProd;

export const state = () => ({
  currentSong: {},
  hasCurrentSong: false,
  heroSong: {},
  heroArtist: {},
  songList: [],
});

export const getters = {
  getHeroSong: state => state.heroSong,
  getHeroArtist: state => state.heroArtist,
  getSongList: state => state.songList,
  getCurrentSong: state => state.currentSong,
  getHasCurrentSong: state => state.hasCurrentSong,
}

export const mutations = {
  updateCurrentSong(state, val) {
    state.currentSong = {...val};
    if(Object.keys(val).length>0){
      this.commit('music/updateHasCurrentSong',true);
    }
  },
  updateHasCurrentSong(state, val) {
    state.hasCurrentSong = val;
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
    const musicService = new MusicService(apiConfig,rootGetters['auth/getAccessToken']);
    musicService.getArtistInfoById(rootGetters['music/getHeroSong'].artist?.id).then((val)=>{
      commit('updateHeroArtist',val.data);
    })
  },
  async findSongsByTitle({rootGetters,commit},title){
    
    const musicService = new MusicService(apiConfig,rootGetters['auth/getAccessToken']);
    musicService.getMusic(title)
    .then(element => element.data)
    .then((val)=>{
      commit('updateSongList',val.data);
      commit('updateHeroSong',val.data[0]);
    });
  }
 }