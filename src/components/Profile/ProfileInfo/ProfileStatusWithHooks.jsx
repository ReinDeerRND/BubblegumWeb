import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import classes from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status && "no status yet")

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
    }
    const onStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <div className={classes.status_container}>
            <div className={classes.title}>Status: </div>
            {
                !editMode &&
                <div><span onDoubleClick={activateEditMode}>{status}</span></div>
            }
            {
                editMode &&
                <div>
                    <input autoFocus
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onStatusChange} />
                </div>
            }
        </div>
    )

}

export default ProfileStatusWithHooks;