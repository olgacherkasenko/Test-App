import React from 'react';
// import chooseBgColor from '../../utils/detectBgColor';

const MonthsList = (props) => {
    const monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    console.log(props.users)
    const listItems = monthsNames.map((item, index) => 
            <li id={index} key={item}> {item} </li>
    );

    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    )
}

export default MonthsList;