import { API_URL } from '~/assets/constants';
require('@nuxtjs/dotenv'); 
const http = require('axios').default;

export class MusicService{
  constructor(token){
    this.token=token;
  }
  async getRandomMusic(){
    return http.get(`${process.env.PROXY}${API_URL}/chart/0`,{headers:{
      'response_type': this.token
    }});
  };
  async getArtistInfoById(id){
    return http.get(`${process.env.PROXY}${API_URL}/artist/${id}`,{headers:{
      'response_type': this.token
    }});
  };

}