import React from 'react';
import classes from './MonthsList.module.css';

const MonthsList = (props) => {
    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const listItems = monthsNames.map((item, index) => (
            <li id={index} key={item} className={props.backgrounds[index]}> {item} </li>
        )     
    );

    return (
        <div>
            <ul className={classes.Months}>{listItems}</ul>
        </div>
    )
}

export default MonthsList;