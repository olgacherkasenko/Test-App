import chooseBgColor from './chooseBgColor';

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;

export const addBgColors = usersObject => Object.fromEntries(
    Object.entries(usersObject).map(
        ([month, users]) => [
            month,
            {
                users,
                color: chooseBgColor(users.length)
            }
        ])
);

export const toUsersByMonth = (acc, {dob, firstName, lastName}) => {
    const month = new Date(dob).getMonth();
    const monthUsers = acc[month] ? acc[month] : [];
    
    return {
        ...acc,
        [month]: [ ...monthUsers, getFullName(firstName, lastName) ]
    }
};