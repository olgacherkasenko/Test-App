import React from 'react';
import classes from './UsersList.module.css';

const usersList = (props) => {
    let activeUsers = [];
    props.users.forEach(person => {
        if(person.month === props.id) {
            activeUsers = person.users;
        }
    });

    const users = activeUsers.map((item, index) => (
            <li id={index} key={item}> {item} </li>
        )     
    );

    return (
        <div>
            <ul className={classes.Users}>{users}</ul>
        </div>
    )
}

export default usersList;