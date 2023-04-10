import React, {useState, useEffect} from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, saveFile, saveProfile}) => {
  let [editMode, setEditMode] = useState(false)
  
  if (!profile) {
    return <Preloader />;
  }
  
  const onMainPhotoSelected = (e)=> {
    
    if (e.target.files.length) {
      saveFile(e.target.files[0])
    }
  }
  
  const onSubmit = (formData) => {
    saveProfile(formData).then(()=>setEditMode(false))
  };
  
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
        {editMode 
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
          : <ProfileData goToEditMode={()=> setEditMode(true)}  profile={profile} isOwner={isOwner}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
       
      </div>
    </div>
  );
};

const ProfileData = ({profile, isOwner, goToEditMode})=>{
  return (
    <div>
          {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
          <div>
            <b>Full name:</b> {profile.fullName}
          </div>
          <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? 'yes' : 'no'}
          </div>
          {profile.lookingForAJob &&
            <div>
              <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
          }
          <div>
            <b>About me:</b> {profile.aboutMe}
          </div>
          <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key=>{
              return (<Contact contactTitle={key} contactValue={profile.contacts[key]} />)
            })}
          </div>
        </div>
    )
}

const Contact =({contactTitle, contactValue})=> {
  return (
    <div key={contactTitle} className={classes.contacts}><b>{contactTitle}: </b>{contactValue}</div>  
  )
}
export default ProfileInfo;
