import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FATCHING = "TOGGLE_IS_FATCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 2,
  isFatching: false,
  followingInProgres: [],
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {
          followed: true,
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, "id", {
          followed: false,
        }),
      };
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case "SET_TOTAL_COUNT":
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case "TOGGLE_IS_FATCHING":
      return {
        ...state,
        isFatching: action.isFatching,
      };
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgres: action.isFatching
          ? [...state.followingInProgres, action.userID]
          : state.followingInProgres.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};
//action creators
export const followSuccess = (userID) => ({
  type: FOLLOW,
  userID,
});
export const unfollowSuccess = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_COUNT,
  count: totalUsersCount,
});
export const toggleIsFatching = (isFatching) => ({
  type: TOGGLE_IS_FATCHING,
  isFatching,
});
export const toggleFollowingProgress = (isFatching, userID) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFatching,
  userID,
});

export const requestUsers = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFatching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFatching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};
export const follow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.follow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  };
};
export const unfollow = (userId) => {
  return async (dispatch) => {
    let apiMethod = usersAPI.unfollow.bind(usersAPI);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
  };
};

export default usersReducer;
