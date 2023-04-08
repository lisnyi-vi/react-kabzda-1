import {usersAPI, profileAPI} from '../api/api';
const ADD_POST ='ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST ='DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

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
    case DELETE_POST:
      return {...state, postData: state.postData.filter(p=>p.id !=action.postId)}
    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}}
    default:
      return state;
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile)=> ({type: SET_USER_PROFILE, profile })
export const setStatus = (status)=> ({type: SET_STATUS, status })
export const deletePost = (postId)=> ({type: DELETE_POST, postId })
export const saveFileSuccess = (photos)=> ({type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId)=>async(dispatch) => {
  let data = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(data));
}
export const getStatus = (userId)=>async(dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(setStatus(data));
}
export const updateStatus = (status)=> async(dispatch) => {
  let data = await profileAPI.updateStatus(status)
      if (data.resultCode === 0) {
        dispatch(setStatus(status));
      }
}

export const saveFile = (file)=> async(dispatch) => {
  let data = await profileAPI.saveFile(file)
      if (data.resultCode === 0) {
        dispatch(saveFileSuccess(data.data.photos));
      }
}

export default profileReducer;