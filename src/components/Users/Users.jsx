import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import userPhoto from "../../assets/images/userphoto.jpg";
import { followUser, unfollowUser } from "../../api/api";


const Users = (props) => {
    let pagesAmount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={classes.pages_container}>
            {pages.map(p => <span className={classes.page_item} key={p} onClick={(e) => props.onPageChanged(p)}>
                <span className={props.selectedPage === p ? classes.active_page : undefined} >{p}</span>
            </span>)}
        </div>
        {
            props.users.map(user => <div key={user.id} className={classes.card_container}>
                <div className={classes.photo_container}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={user.photos.small ? user.photos.small : userPhoto} className={classes.photo} alt="{user.name}" />
                    </NavLink>
                    {
                        user.followed
                            ? <button disabled={props.followUsersInProcess.some(u=>user.id === u)} onClick={() => {
                                props.toggleFollowing(true, user.id);
                                unfollowUser(user.id).then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.unfollow(user.id)
                                    }
                                    props.toggleFollowing(false, user.id);
                                })
                            }}>Unfollow</button>
                            : <button disabled={props.followUsersInProcess.some(u=>user.id === u)} onClick={() => {
                                props.toggleFollowing(true, user.id);
                                followUser(user.id).then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.follow(user.id)
                                    }
                                    props.toggleFollowing(false, user.id);
                                })
                            }}>Follow</button>
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

export default Users;