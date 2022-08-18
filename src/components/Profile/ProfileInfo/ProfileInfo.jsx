import Preloader from '../../common/Preloader/Preloader';
import classes from './ProfileInfo.module.css';
import SocialItem from './SocialItem';
import userPhoto from "../../../assets/images/userphoto.jpg";
//import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <img className={classes.content_img} src="https://www.reisebuerodachau.de/images/layout/slider-02.jpg" alt="China" />
      <div className={classes.description_block}>
        {/* <img alt='avatar' src="https://sun1-20.userapi.com/s/v1/if1/0FZeTjHlzqa60WcRCGKRKkAlnUclSOBc8S21iN7FnQadTKYXk9vPVyQ6vO6gZOLaknvKrlbX.jpg?size=400x0&quality=96&crop=0,160,639,639&ava=1" /> */}
        <img alt="Avatar" src={props.profile.photos.small?props.profile.photos.small: userPhoto } />
        <div>
          <div>{props.profile.fullName}</div>
          <div>About me: {props.profile.aboutMe}</div>
          <div>Search a Job: {props.profile.lookingForAJob ? <span>yes</span> : <span>no</span>}</div>
          <div>Searching Job Description:
            {props.profile.lookingForAJob && props.profile.lookingForAJobDescription
              ? <span>{props.profile.lookingForAJobDescription}</span>
              : null}
          </div>
          <div>Contacts: </div>
          <div className={classes.social_container}>
            {props.profile.contacts.facebook ? <SocialItem social={props.profile.contacts.facebook} title="facebook" /> : null}
            {props.profile.contacts.githab ? <SocialItem social={props.profile.contacts.githab} title="githab" /> : null}
            {props.profile.contacts.instagram ? <SocialItem social={props.profile.contacts.instagram} title="instagram" /> : null}
            {props.profile.contacts.mainLink ? <SocialItem social={props.profile.contacts.mainLink} title="mainLink" /> : null}
            {props.profile.contacts.twitter ? <SocialItem social={props.profile.contacts.twitter} title="twitter" /> : null}
            {props.profile.contacts.vk ? <SocialItem social={props.profile.contacts.vk} title="vk" /> : null}
            {props.profile.contacts.website ? <SocialItem social={props.profile.contacts.website} title="website" /> : null}
            {props.profile.contacts.youtube ? <SocialItem social={props.profile.contacts.youtube} title="youtube" /> : null}
          </div>
        </div>
      </div>
      <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
    </div>
  )
}
export default ProfileInfo;