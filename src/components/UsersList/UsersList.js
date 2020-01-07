import React from 'react';
import classes from './UsersList.module.css';

const usersList = ( {users} ) => (
    <div>
        <ul className={classes.Users}>
            {users.map((item, index) => (
                <li id={index} key={item}> {item} </li>
            ))}
        </ul>
    </div>
)

export default usersList;