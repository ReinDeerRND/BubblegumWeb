import { connect } from 'react-redux';
import { followAC, unfollowAC, addUsersAC } from '../../redux/reducers/usersReducer';
import Users from "./Users";

let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userId)=>dispatch(followAC(userId)),
        unfollow: (userId)=>dispatch(unfollowAC(userId)),
        addUsers: (users)=>dispatch(addUsersAC(users))
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;