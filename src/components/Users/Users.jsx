import React from "react";
import classes from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0 ){
        props.addUsers(
            [
                { id: 0, 
                    followed: true, name: 'Andrew', 
                    location: { city: "Moscow", country: "Russia" }, 
                    status: "Be or not to be",
                    photoURL: "https://sun9-24.userapi.com/impg/WPUNe_tJRoi9NFzCnsaB70GF0bLmcxn5CjV-tA/zEXuGcUBZX4.jpg?size=603x604&quality=96&sign=624c118c60589d1b7a258da06d7a286a&type=album"
                 },
                { id: 1, followed: true, name: 'Sveta', 
                location: { city: "Saint-Petersburg", country: "Russia" }, 
                status: "Be or not to be",
                photoURL: "https://sun9-24.userapi.com/impg/WPUNe_tJRoi9NFzCnsaB70GF0bLmcxn5CjV-tA/zEXuGcUBZX4.jpg?size=603x604&quality=96&sign=624c118c60589d1b7a258da06d7a286a&type=album" },
                { id: 2, followed: false, name: 'Afina', location: { city: "Kiyv", country: "Ukraine" }, status: "Be or not to be", 
                photoURL: "https://sun9-24.userapi.com/impg/WPUNe_tJRoi9NFzCnsaB70GF0bLmcxn5CjV-tA/zEXuGcUBZX4.jpg?size=603x604&quality=96&sign=624c118c60589d1b7a258da06d7a286a&type=album" },
                { id: 3, followed: false, name: 'Guru', location: { city: "Minsk", country: "Belarus" }, status: "Be or not to be",
                photoURL: "https://sun9-24.userapi.com/impg/WPUNe_tJRoi9NFzCnsaB70GF0bLmcxn5CjV-tA/zEXuGcUBZX4.jpg?size=603x604&quality=96&sign=624c118c60589d1b7a258da06d7a286a&type=album" },
                { id: 4, followed: true, name: 'Stranger', location: { city: "Boston", country: "USA" }, status: "Be or not to be", 
                photoURL: "https://sun9-24.userapi.com/impg/WPUNe_tJRoi9NFzCnsaB70GF0bLmcxn5CjV-tA/zEXuGcUBZX4.jpg?size=603x604&quality=96&sign=624c118c60589d1b7a258da06d7a286a&type=album"},
            ]
        )
    }
    return <div>
        {
            props.users.map(user => <div key={user.id} className={classes.card_container}>
                <div className={classes.photo_container}>
                    <img src={user.photoURL} className={classes.photo} alt="{user.name}" />
                    {
                        user.followed
                            ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                            : <button onClick={()=>{ props.follow(user.id)}}>Follow</button>
                    }
                </div>
                <div className={classes.info_container}>
                    <div className={classes.name}>{user.name}</div>
                    <div className={classes.location}>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </div>
                    <div className={classes.status}>{user.status}</div>
                </div>
            </div>)
        }
    </div>
}
export default Users;