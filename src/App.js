import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { addBgColors, toUsersByMonth } from './utils/sortUsers';
import Spinner from './components/Spinner/Spinner';
import MonthsList from './components/MonthsList/MonthsList';
import UsersList from './components/UsersList/UsersList';
import './App.css';

const USERS_URL = 'https://yalantis-react-school.herokuapp.com/api/task0/users';

function App() {
  const [people, setPeople] = useState([]);
  const [activeUsers, setActiveUsers] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const onSuccessDataReceiving = data => {
    const sortedData = data.reduce(toUsersByMonth, {});
    const dataWithBgColors = addBgColors(sortedData);
    setPeople(dataWithBgColors);
    setIsLoading(false);
};

  useEffect(() => {
    axios.get(USERS_URL)
      .then(({data}) => onSuccessDataReceiving(data))
        .catch(error => {
          setIsLoading(false);
          console.log(error);
        });
  }, []);


  const onMouseLeaveHandler = () => setIsHovered(false);

  const onMouseEnterHandler = ({target: {id}}) => {
    const currentId = parseInt(id);
    const activeMonth = people[currentId];
    setActiveUsers(activeMonth.users);
    setIsHovered(true);
  }

    return (
      <div className='App'>
          {isLoading ? <Spinner /> :
            <>
                <MonthsList 
                    people={people} 
                    mouseEnter={onMouseEnterHandler} 
                    mouseLeave={onMouseLeaveHandler}
                />
                {isHovered && <UsersList users={activeUsers}/> }
            </> 
          }
      </div>
    )
}

  

export default App;
