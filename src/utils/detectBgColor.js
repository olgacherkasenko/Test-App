
const chooseBgColor = (num) => {
    let backgroundColor = '';

    switch(num) {
        case(num >= 0 && num <= 2) :
            backgroundColor = '#ADADAD';
            break;
        case (num >= 3 && num <= 6) :
            backgroundColor = '#2E44A2';
            break;
        case (num >= 7 && num <= 10) :
            backgroundColor = '#35B523';
            break;
        case (num >= 11) :
            backgroundColor = '#E10D09';
            break;
        default: 
            backgroundColor = '#FFFFFF';
    }

    console.log(backgroundColor);
    return backgroundColor;
}

export default chooseBgColor;
