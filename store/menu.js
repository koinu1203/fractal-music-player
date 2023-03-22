export const state = () =>({
  activeTab: 1,
  menuLibrary: [
    { id:1, name: 'Recientes' }, 
    { id:2, name: 'Artistas' },
    { id:3, name: 'Álbums' },
    { id:4, name: 'Canciones' },
    { id:5, name: 'Estaciones' },
  ],
  menuPlaylist: [
    { id:6, name: 'Metal' },
    { id:7, name: 'Recientes' },
    { id:8, name: 'Recientes' },
    { id:9, name: 'Recientes' },
  ]
});
export const getters = {
  getActiveTab: state => state.activeTab,
  getMenuLibrary: state => state.menuLibrary,
  getMenuPlaylist: state => state.menuPlaylist,
  getActiveTabInfo: state => {
    //TODO FUNCION
    // const activeTabInfo = 
    // return ;
  }
}

export const mutations = {
  updateActiveTab(state,val){
    state.activeTab=val;
  }
}