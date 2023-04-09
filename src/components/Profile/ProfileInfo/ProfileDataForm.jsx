import React from "react";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

const ProfileDataForm = (props)=>{
  const { handleSubmit } = props
 
  return (
    <form onSubmit={handleSubmit}>
        <div><button>Save</button></div>
          <div>
            <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
          </div>
          <div>
            <b>Looking for a job:</b> {createField(null, "lookingForAJob", [], Input, { type: "checkbox" })}
          </div>
            <div>
              <b>My professional skills:</b> {createField("My professional skill", "lookingForAJobDescription", [], Textarea)}
            </div>
          }
          <div>
            <b>About me:</b>{createField("About me", "aboutMe", [], Textarea)}
          </div>
          
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({
  form: "edit-profile", enableReinitialize: true
})(ProfileDataForm);


export default ProfileDataFormReduxForm;
