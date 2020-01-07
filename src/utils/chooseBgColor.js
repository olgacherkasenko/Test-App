const chooseBgColor = num => {
    switch (true) {
        case num > 10:
            return 'red';
        case num > 6:
            return 'green';
        case num > 2:
            return 'blue';
        default: return 'grey';
    }
};

export default chooseBgColor;
