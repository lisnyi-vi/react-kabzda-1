import React from 'react';
import profileReducer from './profile-reducer.js';
import {addPostActionCreator, deletePost} from './profile-reducer.js';

let state = {
    postData: [
          {id:1, message: "Hi, how are you?", likeCount: 12},
          {id:2, message: "It's my first post", likeCount: 11},
          {id:3, message: "Blabla", likeCount: 11},
          {id:4, message: "Second post", likeCount: 11}
    ]
  }

it('length of posts should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator("lisnyi.com")
  //2. action
  let newState = profileReducer(state,action)
  //3. Expectation
  expect( newState.postData.length).toBe(5);
  
});

it('message of new post should be "lisnyi.com"', () => {
  // 1. test data
  let action = addPostActionCreator("lisnyi.com")
  
  //2. action
  let newState = profileReducer(state,action)
  //3. Expectation
 
  expect( newState.postData[4].message).toBe("lisnyi.com");
});

it('after deletind length os message shuold be decrement', () => {
  // 1. test data
  let action = deletePost(1)
  
  //2. action
  let newState = profileReducer(state,action)
  //3. Expectation
 
  expect( newState.postData.length).toBe(3);
});

it('after deletind incorect id length os message shuold be not change', () => {
  // 1. test data
  let action = deletePost(1000)
  
  //2. action
  let newState = profileReducer(state,action)
  //3. Expectation
 
  expect( newState.postData.length).toBe(4);
});


