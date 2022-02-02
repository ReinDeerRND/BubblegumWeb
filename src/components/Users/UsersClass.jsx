import React from "react";
import * as axios from "axios";
import UsersFunc from "./UsersFunc";

class UsersClass extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.selectedPage);
    }

    getUsers(page) {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount)
            });
    }

    onPageChanged(page) {
        this.props.setSelectedPage(page);
        this.getUsers(page);
    }

    render() {
        return <UsersFunc
            selectedPage={this.props.selectedPage}
            users={this.props.users}
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged.bind(this)}
        ></UsersFunc>
    }

}
export default UsersClass;