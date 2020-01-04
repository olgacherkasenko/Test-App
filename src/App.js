import React, { Component } from 'react';
import axios from 'axios';
import MonthsList from './components/MonthsList/MonthsList';
import sortUsers from './utils/sortUsers';
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
    return (
      <div className="App">
        <MonthsList users={this.state.people}/>
      </div>
    )
  }
}

export default App;
