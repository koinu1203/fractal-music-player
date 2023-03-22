import { PUBLIC_KEY } from '~/assets/constants';
import { AuthService } from '~/services/auth.service';
export default function ({ query, store }) {
  
  const authService = new AuthService();
  const getUser = () => {
    authService.getUserByToken(store.state.auth.accessToken).then((val)=>{
      store.commit('user/replaceCurrentUser',val.data);
    });
  };

  const localAccessCode = localStorage.getItem('access_code');
  if(localAccessCode){
    store.commit('auth/updateCode',localAccessCode);
  }
  if (!store.state.auth.hasAccessCode) {
    if(query.code){
      localStorage.setItem('access_code',query.code);
      store.commit('auth/updateCode',query.code);
    }else{
      authService.redirectToUserCode();
    }
  }

  const localAccessToken = localStorage.getItem('access_token');
  if(localAccessToken){
    store.commit('auth/updateAccessToken',localAccessToken);
  }

  if(!store.state.auth.hasAccessToken){
    authService.getAccessToken(store.state.auth.accessCode).then((val)=>{
      store.commit('auth/updateAccessToken',val.data.access_token);
      store.commit('auth/updateLifeTimeToken',val.data.expires);
      localStorage.setItem('access_token',val.data.access_token);
      getUser();

    });
  }else{
    getUser();
  }
  
};