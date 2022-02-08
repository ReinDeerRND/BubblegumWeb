import React from "react";
import * as axios from "axios";
import UsersFunc from "./UsersFunc";
import Preloader from "../common/Preloader/Preloader";

class UsersClass extends React.Component {

    componentDidMount() {
        this.getUsers(this.props.selectedPage);
    }

    getUsers(page) {
        this.props.toggleLoading(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,
                { withCredentials: true })
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalCount(res.data.totalCount);
                this.props.toggleLoading(false);
            });
    }

    onPageChanged(page) {
        this.props.setSelectedPage(page);
        this.getUsers(page);
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader /> :

                <UsersFunc
                    selectedPage={this.props.selectedPage}
                    users={this.props.users}
                    totalCount={this.props.totalCount}
                    pageSize={this.props.pageSize}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    onPageChanged={this.onPageChanged.bind(this)}
                ></UsersFunc>
            }
        </>


    }

}
export default UsersClass;