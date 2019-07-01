import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }

  addSmurfInfo = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        this.setState({ smurfs: res.data });

      })
      .catch(err => console.log(err));
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <ul className="nav">
          <li className="nav-link">
            <NavLink exact to="/" activeClassName="activeNavButton">Smurfs</NavLink>
          </li>
          <li className="nav-link">
            <NavLink exact to="/smurf-form" activeClassName="activeNavButton">Add Smurf</NavLink>
          </li>
        </ul>
        <div className="smurfs">
          <Route exact path="/" render={props => (<Smurfs {...props} smurfs={this.state.smurfs} />)} />
        </div>
        <div className="smurf-form-container">
          <Route path="/smurf-form" render={props => (<SmurfForm {...props} addSmurfInfo={this.addSmurfInfo} />)} />
        </div>
      </div>
    );
  }
}

export default App;
