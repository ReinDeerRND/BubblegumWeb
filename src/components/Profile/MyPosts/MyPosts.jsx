import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLength } from '../../../utils/validators';
import { TextareaControl } from '../../common/FormControls/FormControls';

class MyPosts extends React.PureComponent {

  onSubmit = (newPost) => {
    this.props.addPost(newPost.newPost);
  }

  render() {
    return (
      <div className={classes.posts_container}>
        <div >
          <h3>Create New Post</h3>
          <NewPostFormRedux onSubmit={this.onSubmit} />
        </div>
        <div>
          {this.props.posts.map(post => (<Post key={post.id} text={post.text} likesCount={post.likesCount} />))}
        </div>
      </div>
    )
  }
}

const maxLength100 = maxLength(100);
const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.myposts_form}>
        <Field
          component={TextareaControl}
          name="newPost"
          className={classes.mypost_textarea}
          placeholder="Enter New Post ..."
          validate={[requiredField, maxLength100]}
        />
        <button type="submit">Add Post</button>
      </div>
    </form>
  )
}

const NewPostFormRedux = reduxForm({ form: "newPost" })(NewPostForm);

export default MyPosts;