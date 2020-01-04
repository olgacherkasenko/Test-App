import React from 'react';
import chooseBgColor from '../../utils/detectBgColor';
import classes from './MonthsList.module.css';

const MonthsList = (props) => {
    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let bgColors = [];
    props.users.forEach(user => {
        let bgColor = chooseBgColor(user.amount);
        bgColors.push(bgColor);
    });
    console.log(bgColors)
    const listItems = monthsNames.map((item, index) => (
        <li id={index} key={item} className={bgColors[index]}> {item} </li>
    )
           
    );

    return (
        <div>
            <ul className={classes.Months}>{listItems}</ul>
        </div>
    )
}

export default MonthsList;