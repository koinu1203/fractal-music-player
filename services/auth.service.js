import {API_URL, AUTH_URL} from '../assets/constants';
const http = require('axios').default;

export class AuthService{
  constructor(apiConfig,token){
    this.token = token;
    this.apiConfig = {...apiConfig};
    this.axiosConfig = {
      crossdomain:true
    }
  }

  redirectToUserCode(){
    window.location.href = `${AUTH_URL}/auth.php?app_id=${this.apiConfig.APP_ID}&redirect_uri=${this.apiConfig.BASE_URL}&perms=email,offline_access`;
  }

  async getAccessToken(code){
    return http.get(`${this.apiConfig?.PROXY}${AUTH_URL}/access_token.php?app_id=${ this.apiConfig.APP_ID}&secret=${this.apiConfig.SECRET_KEY}&code=${code}&output=json`,this.axiosConfig);
  }

  async getUserByToken(token){
    return http.get(`${this.apiConfig?.PROXY}${API_URL}/user/me?access_token=${token}`,this.axiosConfig);
  }
}