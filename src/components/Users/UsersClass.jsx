import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { Redirect } from 'react-router-dom';

class UsersClass extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.selectedPage);
    }

    getUsers(page) {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }

    onPageChanged(page) {
        this.props.setSelectedPage(page);
        this.getUsers(page);
    }

    render() {

        if(!this.props.isAuth) {
            return <Redirect to="/login" />
          }

        return <>
            {this.props.isLoading ? <Preloader /> :
                <Users
                    selectedPage={this.props.selectedPage}
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged.bind(this)}
                    followUsersInProcess = {this.props.followUsersInProcess}
                    unfollowUserThunkCreator = {this.props.unfollowUserThunkCreator}
                    followUserThunkCreator = {this.props.followUserThunkCreator}
                ></Users>
            }
        </>
    }

}
export default UsersClass;