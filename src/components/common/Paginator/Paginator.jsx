import React from "react";
import classes from './Paginator.module.css';

const Paginator = ({ selectedPage, totalCount, pageSize, onPageChanged }) => {

    let pagesAmount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesAmount; i++) {
        pages.push(i);
    }
    return <div className={classes.pages_container}>
        {pages.map(p => <span className={classes.page_item} key={p} onClick={(e) => onPageChanged(p)}>
            <span className={selectedPage === p ? classes.active_page : undefined} >{p}</span>
        </span>)}
    </div>
}

export default Paginator;