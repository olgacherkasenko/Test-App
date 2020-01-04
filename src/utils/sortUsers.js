let people = [
    {
        month: 0,
        amount: 0,
        users: []
    },
    {
        month: 1,
        amount: 0,
        users: []
    },
    {
        month: 2,
        amount: 0,
        users: []
    },
    {
        month: 3,
        amount: 0,
        users: []
    },
    {
        month: 4,
        amount: 0,
        users: []
    },
    {
        month: 5,
        amount: 0,
        users: []
    },
    {
        month: 6,
        amount: 0,
        users: []
    },
    {
        month: 7,
        amount: 0,
        users: []
    },
    {
        month: 8,
        amount: 0,
        users: []
    },
    {
        month: 9,
        amount: 0,
        users: []
    },
    {
        month: 10,
        amount: 0,
        users: []
    },
    {
        month: 11,
        amount: 0,
        users: []
    }
];


const sortUsers = (usersData) => {
    usersData.forEach(user => {   
        people.forEach(person => {
            if (person.month === new Date(user.dob).getMonth()) {
                person.users.push(`${user.firstName} ${user.lastName}`);
                person.amount++;
            }
        })
    })

    return people;
}

export default sortUsers;