import React from 'react';
import Profile from './Profile';
import { getProfileThunkCreator } from "../../redux/reducers/profileReducer";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2;
    this.props.getProfileThunkCreator(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps =(state)=>({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getProfileThunkCreator})(withRouter(ProfileContainer));