import MyPostsContainer from './MyPosts/MyPostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        uploadPhoto={props.uploadPhoto} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;