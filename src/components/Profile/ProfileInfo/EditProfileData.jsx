import { reduxForm } from 'redux-form';
import { createControl, InputControl, TextareaControl } from '../../common/FormControls/FormControls';
import classes from './ProfileInfo.module.css';

const EditProfileData = ({ handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className={classes.top_button}> <button type="submit">Save</button></div>
      {createControl(InputControl, "fullName", "Name", [], { autoFocus: true })}
      {createControl(TextareaControl, "aboutMe", "About Me", [])}
      {createControl(InputControl, "lookingForAJob", null, [], { type: "checkbox" }, "Looking for a Job")}
      {createControl(TextareaControl, "lookingForAJobDescription", "Searching Job Description", [])}
      <div>Contacts: </div>
      <div className={classes.social_container}>
        {/* {Object.keys(profile.contacts).map(key => {
          let value = profile.contacts[key];
          return value ? <SocialItem social={value} title={key} /> : null;
        })} */}
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'profileData'
})(EditProfileData);