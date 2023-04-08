import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} isOwner={props.isOwner} saveFile={props.saveFile}/>
      <MyPostsContainer />
    </div>
    )
}

export default Profile;