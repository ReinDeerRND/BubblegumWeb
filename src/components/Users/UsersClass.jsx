import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
// import { getUsers } from "../../api/api";

class UsersClass extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.selectedPage);
    }

    getUsers(page) {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
        // this.props.toggleLoading(true);
        // getUsers(page, this.props.pageSize).then(data => {
        //     this.props.setUsers(data.items);
        //     this.props.setTotalCount(data.totalCount);
        //     this.props.toggleLoading(false);
        // });
    }

    onPageChanged(page) {
        this.props.setSelectedPage(page);
        this.getUsers(page);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> :
                <Users
                    selectedPage={this.props.selectedPage}
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged.bind(this)}
                    toggleFollowing = {this.props.toggleFollowing}
                    followUsersInProcess = {this.props.followUsersInProcess}
                ></Users>
            }
        </>
    }

}
export default UsersClass;