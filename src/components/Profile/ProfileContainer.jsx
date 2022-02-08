import React from 'react';
import Profile from './Profile';
import { setUserProfile } from "../../redux/reducers/profileReducer";
import {getProfile}  from "../../api/api";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount(){
    let userId = this.props.match.params.userId;
    if(!userId) userId = 2;
    getProfile(userId)
    .then(data => {
        this.props.setUserProfile(data);
    });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}

const mapStateToProps =(state)=>({
  profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));