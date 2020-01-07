import React from 'react';
import classes from './MonthsList.module.css';

const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const MonthsList = ( {people, mouseEnter, mouseLeave} ) => {
    const listItems = monthsNames.map((item, index) => (
            <li 
                id={index} 
                key={item} 
                className={people[index].color} 
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}> 
                {item} 
            </li>
        )     
    );

    return (
        <div>
            <ul className={classes.Months}> {listItems} </ul>
        </div>
    )
}

export default MonthsList;