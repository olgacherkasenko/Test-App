import React, { Component } from 'react';
import axios from 'axios';
import Aux from './hoc/Auxiliary';
import sortUsers from './utils/sortUsers';
import chooseBgColor from './utils/chooseBgColor';
import Spinner from './components/Spinner/Spinner';
import MonthsList from './components/MonthsList/MonthsList';
import UsersList from './components/UsersList/UsersList';
import './App.css';

class App extends Component {
  state = {
    people: [],
    activeId: 0,
    isHovered: false
  }

  componentDidMount() {
    axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
        .then(res => {
            let people = sortUsers(res.data);
            this.setState({people: people});
        })
  } 

  onMouseLeaveHandler = () => {
    this.setState({isHovered: false})
  }

  onMouseEnterHandler = ({target}) => {
    const currentId = parseInt(target.id);
    this.setState({activeId: currentId, isHovered: true})
  }

  render () {
    const isLoading = this.state.people.length === 0;
    let bgColors = [];

    if (!isLoading) {
      this.state.people.forEach(user => {
          let bgColor = chooseBgColor(user.amount);
          bgColors.push(bgColor);
      });
    }

    return (
      <div className="App">
          {isLoading ? <Spinner /> :
            <Aux>
                <MonthsList users={this.state.people} backgrounds={bgColors} mouseEnter={this.onMouseEnterHandler} mouseLeave={this.onMouseLeaveHandler}/>
                {this.state.isHovered ? <UsersList users={this.state.people} id={this.state.activeId}/> : ''}
            </Aux> 
          }
      </div>
    )
  }
}

export default App;
