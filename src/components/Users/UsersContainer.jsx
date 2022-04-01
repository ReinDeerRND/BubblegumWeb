import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuhRedirect';
import {
    setSelectedPage,
    getUsersThunkCreator,
    followUserThunkCreator,
    unfollowUserThunkCreator
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
        followUsersInProcess: state.usersPage.followUsersInProcess,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setSelectedPage, getUsersThunkCreator, unfollowUserThunkCreator, followUserThunkCreator
    })
)(UsersClass);