import { API_URL } from '~/assets/constants';
require('@nuxtjs/dotenv'); 
const http = require('axios').default;

export class MusicService{
  constructor(token){
    this.token=token;
  }
  
  async getTrackMusic(name){
    return http.get(`${process.env.PROXY}${API_URL}/search/track?q=${name}`,{headers:{
      'response_type': this.token
    }});
  }
  getRandomMusic(){
    return this.getTrackMusic('a');
  };
  async getArtistInfoById(id){
    return http.get(`${process.env.PROXY}${API_URL}/artist/${id}`,{headers:{
      'response_type': this.token
    }});
  };

}