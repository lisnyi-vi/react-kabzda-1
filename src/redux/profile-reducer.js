import {usersAPI, profileAPI} from '../api/api';
const ADD_POST ='ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
          {id:1, message: "Hi, how are you?", likeCount: 12},
          {id:2, message: "It's my first post", likeCount: 11},
          {id:3, message: "Blabla", likeCount: 11},
          {id:4, message: "Second post", likeCount: 11}
    ],
    profile: null,
    status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: 
      let newPost = {
            id: 11,
            message: action.newPostText,
            likeCount: 0
        };
      return {
        ...state,
        postData: [...state.postData, newPost],
        
    } 
    
    case SET_USER_PROFILE: 
      return {...state, profile: action.profile}
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile)=> ({type: SET_USER_PROFILE, profile })
export const setStatus = (status)=> ({type: SET_STATUS, status })

export const getUserProfile = (userId)=>(dispatch) => {
  usersAPI.getProfile(userId).then(data => {
      dispatch(setUserProfile(data));
    })
}
export const getStatus = (userId)=>(dispatch) => {
  profileAPI.getStatus(userId).then(data => {
      dispatch(setStatus(data));
    })
}
export const updateStatus = (status)=>(dispatch) => {
  profileAPI.updateStatus(status).then(data => {
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    })
}

export default profileReducer;