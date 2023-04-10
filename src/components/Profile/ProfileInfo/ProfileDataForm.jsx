import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import classes from "./ProfileInfo.module.css";
import errorClasses from "../../common/FormsControls/FormsControls.module.css";

import { createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = ({ handleSubmit, profile, error})=>{
  return (
    <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
        {error && <div className={classes.formSummaryError}>{error}</div>}
          <div>
            <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
          </div>
          <div>
            <b>Looking for a job:</b> {createField(null, "lookingForAJob", [], Input, { type: "checkbox" })}
          </div>
            <div>
              <b>My professional skills:</b> {createField("My professional skill", "lookingForAJobDescription", [], Textarea)}
            </div>
          
          <div>
            <b>About me:</b>{createField("About me", "aboutMe", [], Textarea)}
          </div>
          <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key=>{
              return (
                <div key={key} className={classes.contacts}>
                  <b>{key}: {createField(key, "contacts." + key, [], Input)} </b>
                </div> 
                
            )})}
          </div>
          
          
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile", enableReinitialize: true
})(ProfileDataForm);


export default ProfileDataFormReduxForm;
