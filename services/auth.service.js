import {API_URL, AUTH_URL} from '../assets/constants';
const http = require('axios').default;
require('@nuxtjs/dotenv'); 

export class AuthService{
  
  redirectToUserCode(){
    window.location.href = `${AUTH_URL}/auth.php?app_id=${process.env.APP_ID}&redirect_uri=${process.env.DOMAIN}&perms=email,offline_access`;
  }

  async getAccessToken(code){
    return http.get(`${process.env.PROXY}${AUTH_URL}/access_token.php?app_id=${process.env.APP_ID}&secret=${process.env.SECRET_KEY}&code=${code}&output=json`);
  }

  async getUserByToken(token){
    return http.get(`${process.env.PROXY}${API_URL}/user/me?access_token=${token}`);
  }
}