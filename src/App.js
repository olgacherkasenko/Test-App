import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import Aux from './hoc/Auxiliary';
import sortUsers from './utils/sortUsers';
import chooseBgColor from './utils/chooseBgColor';
import Spinner from './components/Spinner/Spinner';
import MonthsList from './components/MonthsList/MonthsList';
import UsersList from './components/UsersList/UsersList';
import './App.css';

// class App extends Component {
//   state = {
//     people: [],
//     activeId: 0,
//     isHovered: false
//   }

//   componentDidMount() {
//     axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
//         .then(res => {
//             let people = sortUsers(res.data);
//             this.setState({people: people});
//         })
//   } 

//   onMouseLeaveHandler = () => {
//     this.setState({isHovered: false})
//   }

//   onMouseEnterHandler = ({target}) => {
//     const currentId = parseInt(target.id);
//     this.setState({activeId: currentId, isHovered: true})
//   }

//   render () {
//     const isLoading = this.state.people.length === 0;
//     let bgColors = [];

//     if (!isLoading) {
//       this.state.people.forEach(user => {
//           let bgColor = chooseBgColor(user.amount);
//           bgColors.push(bgColor);
//       });
//     }

//     return (
//       <div className="App">
//           {isLoading ? <Spinner /> :
//             <Aux>
//                 <MonthsList users={this.state.people} backgrounds={bgColors} mouseEnter={this.onMouseEnterHandler} mouseLeave={this.onMouseLeaveHandler}/>
//                 {this.state.isHovered ? <UsersList users={this.state.people} id={this.state.activeId}/> : ''}
//             </Aux> 
//           }
//       </div>
//     )
//   }
// }

function App() {
  const [people, setPeople] = useState([]);
  const [activeId, setActiveId] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const isLoading = people.length === 0;

  let bgColors = [];
  if (!isLoading) {
    people.forEach(user => {
        let bgColor = chooseBgColor(user.amount);
        bgColors.push(bgColor);
    });
  }

  useEffect(() => {
    axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
      .then(res => {
          let people = sortUsers(res.data);
          setPeople(people);
      })
  }, [])

  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  }

  const onMouseEnterHandler = ({target}) => {
    const currentId = parseInt(target.id);
    setIsHovered(true);
    setActiveId(currentId);
  }

    return (
      <div className="App">
          {isLoading ? <Spinner /> :
            <Aux>
                <MonthsList users={people} backgrounds={bgColors} mouseEnter={onMouseEnterHandler} mouseLeave={onMouseLeaveHandler}/>
                {isHovered ? <UsersList users={people} id={activeId}/> : ''}
            </Aux> 
          }
      </div>
    )
}

  

export default App;
