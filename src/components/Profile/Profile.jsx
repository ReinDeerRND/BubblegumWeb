import { Redirect } from 'react-router-dom';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
 if(!props.isAuth) {
   return <Redirect to={"/login"} />
 }

  return (
    <div>
      <ProfileInfo  profile={props.profile}/>
      <MyPostsContainer />
    </div>
  )
}
export default Profile;