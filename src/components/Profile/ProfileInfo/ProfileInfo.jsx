import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
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
        <img src={props.profile.photos.large} alt="profile-foto" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.profile.fullName}</div>
        {props.profile.aboutMe}
      </div>
    </div>
  );
};

export default ProfileInfo;
