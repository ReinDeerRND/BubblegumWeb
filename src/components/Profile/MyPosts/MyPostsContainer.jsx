import { connect } from 'react-redux';
import { addPostActionCreator, updateNewTextActionCreator } from "../../../redux/reducers/profileReducer";
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => dispatch(dispatch(updateNewTextActionCreator(text))),
    addPost: () => dispatch(addPostActionCreator())
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;