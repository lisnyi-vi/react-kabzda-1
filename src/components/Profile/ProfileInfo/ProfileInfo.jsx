import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, saveFile}) => {
  
  if (!profile) {
    return <Preloader />;
  }
  
  const onMainPhotoSelected = (e)=> {
    
    if (e.target.files.length) {
      saveFile(e.target.files[0])
    }
  }
  
  return (
    <div>
      <div>
        <img
          src="https://lisnyi.com/assets/images/mg-2256.webp"
          alt="content"
        />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={profile.photos.large || "https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png"} className={classes.mainPhoto} alt="profile-foto" />
        {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>{profile.fullName}</div>
        {profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileInfo;
