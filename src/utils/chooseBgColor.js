const chooseBgColor = (num) => {
    let className = '';

    if (num >= 0 && num <= 2) {
        className = 'grey';
    }

    if ( num >= 3 && num <= 6) {
        className = 'blue';
    }

    if (num >= 7 && num <= 10) {
        className = 'green';
    }

    if ( num >= 11) {
        className = 'red';
    }
    
    return className;
}

export default chooseBgColor;
