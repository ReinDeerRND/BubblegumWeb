import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {

  let postList = props.posts.map(post =>(<Post text={post.text} likesCount={post.likesCount} />))
  let newPostElement = React.createRef();
  let  onAddPost =()=>{
    props.addPost();
  }

  let onPostChange = ()=>{
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={classes.posts_container}>
      <div >
        <h3>New Post</h3>
        <div className={classes.myposts_form}>
          <textarea ref={newPostElement} onChange={onPostChange} className={classes.mypost_textarea} 
          value = {props.newPostText} />
          <button onClick={onAddPost}>Add Post</button>
        </div>

      </div>
      <div>
       {postList}
      </div>
    </div>
  )
}
export default MyPosts;