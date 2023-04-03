import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
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
        <img src={profile.photos.large} alt="profile-foto" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div>{profile.fullName}</div>
        {profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileInfo;
