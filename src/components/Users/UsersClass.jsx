import React from "react";
import classes from './Users.module.css';
import * as axios from "axios";
import userPhoto from "../../assets/images/userphoto.jpg";

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
        let pagesAmount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesAmount; i++) {
            pages.push(i);
        }

        return <div>
            <div className={classes.pages_container}>
                {pages.map(p => <span className={classes.page_item} key={p} onClick={() => this.onPageChanged(p)}>
                    <span className={this.props.selectedPage === p ? classes.active_page : undefined} >{p}</span>
                </span>)}
            </div>
            {
                this.props.users.map(user => <div key={user.id} className={classes.card_container}>
                    <div className={classes.photo_container}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} className={classes.photo} alt="{user.name}" />
                        {
                            user.followed
                                ? <button onClick={() => { this.props.unfollow(user.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(user.id) }}>Follow</button>
                        }
                    </div>
                    <div className={classes.info_container}>
                        <div className={classes.name}>{user.name}</div>
                        <div className={classes.location}>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                        <div className={classes.status}>{user.status}</div>
                    </div>
                </div>)
            }
        </div>
    }

}
export default UsersClass;