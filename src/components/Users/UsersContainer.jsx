import { connect } from 'react-redux';
import {
    followAC,
    unfollowAC,
    setUsersAC,
    setTotalCountAC,
    setSelectedPageAC,
    toggleLoadingAC
} from '../../redux/reducers/usersReducer';
//import Users from "./Users";
import UsersClass from './UsersClass';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        selectedPage: state.usersPage.selectedPage,
        isLoading: state.usersPage.isLoading,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        setTotalCount: (count) => dispatch(setTotalCountAC(count)),
        setSelectedPage: (page) => dispatch(setSelectedPageAC(page)),
        toggleLoading: (isLoading) => dispatch(toggleLoadingAC(isLoading)),
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass); //Users
export default UsersContainer;