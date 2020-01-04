import React, { Component } from 'react';
import axios from 'axios';
import MonthsList from './components/MonthsList/MonthsList';
import sortUsers from './utils/sortUsers';
import Spinner from './components/Spinner/Spinner';
import chooseBgColor from './utils/chooseBgColor';
import './App.css';

class App extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    axios.get('https://yalantis-react-school.herokuapp.com/api/task0/users')
          .then(res => {
            let people = sortUsers(res.data);
            this.setState({people: people});
          })
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
          {isLoading ? <Spinner /> : <MonthsList users={this.state.people} backgrounds={bgColors}/>}
      </div>
    )
  }
}

export default App;
