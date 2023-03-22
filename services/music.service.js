import { API_URL } from '~/assets/constants';
require('@nuxtjs/dotenv'); 
const http = require('axios').default;

export class MusicService{
  constructor(apiConfig,token){
    this.token=token;
    this.apiConfig=apiConfig;
    this.axiosConfig = {
      crossdomain:true
    }
  }
  async getMusic(name){
    return http.get(`${this.apiConfig.PROXY?? ''}${API_URL}/search?q=${name}`,this.axiosConfig);
  }
  async getTrackMusic(name){
    return http.get(`${this.apiConfig.PROXY?? ''}${API_URL}/search/track?q=${name}`,this.axiosConfig);
  }
  async getAlbumMusic(name){
    return http.get(`${this.apiConfig.PROXY?? ''}${API_URL}/search/album?q=${name}`,this.axiosConfig);
  }
  getRandomMusic(){
    return this.getMusic('a');
  };
  getRandomAlbums(){
    return this.getAlbumMusic('a');
  };
  async getArtistInfoById(id){
    return http.get(`${this.apiConfig.PROXY??''}${API_URL}/artist/${id}`,this.axiosConfig);
  };
  async getAlbumById(id){
    return http.get(`${this.apiConfig.PROXY?? ''}${API_URL}/album/${id}`,this.axiosConfig);
  }
}