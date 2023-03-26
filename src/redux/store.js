import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

  let store = {
    _state: {
      profilePage: {
        postData: [
          {id:1, message: "Hi, how are you?", likeCount: 12},
          {id:2, message: "It's my first post", likeCount: 11},
          {id:3, message: "Blabla", likeCount: 11},
          {id:4, message: "Second post", likeCount: 11}
        ],
        newPostText: 'lisnyi.com_'
      },
      dialogsPage:{
        dialogData: [
          {id:1, name: "Vasya"},
          {id:2, name: "Andriy"},
          {id:3, name: "Yura"},
          {id:4, name: "Marta"},
          {id:5, name: "Olya"},
          {id:6, name: "Ivan"}
        ],
        messageData: [
          {id:1, message: "Hi"},
          {id:2, message: "How are you"},
          {id:3, message: "Yo"},
          {id:4, message: "Yo"},
          {id:5, message: "Yo"},
        ],
        newMessageText: '',
      },
      sidebar: {}
  },
  
    getState () {
      return this._state
    },
    
    _callSubscriber () {
      console.log('State changed')
    },
    
    subscribe (observer) {
     this._callSubscriber = observer;
    },
    
    dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber(this._state);
    }
  }
  
  export default store;
  window.store = store;