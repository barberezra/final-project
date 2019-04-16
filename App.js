import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {medianame: null};
  }

  render() {
    return (
      medianame = input.valu
      this.setState({medianame: input.value}) // build input
        // on update: update state
      {
        // if medianame is instagram...
        // else if medianame is reddit...
        // else...
      }
    )
      if (input.value === "instagram") {
      return (
        <div className="App">
          <header className="App-header">
            <p>Here is the site you requested: </p>
            <a href="https://www.instagram.com"></a>
          </header>
        </div>
      );
     }
      if (input.value === "reddit") {
         return (
        <div className="App">
          <header className="App-header">
            <p>Here is the site you requested: </p>
            <a href="https://www.reddit.com"></a>
          </header>
        </div>
      );
     }
      if (input.value === "reddit") {
        return (
        <div className="App">
          <header className="App-header">
            <p>Here is the site you requested: </p>
            <a href="https://www.instagram.com"></a>
          </header>
        </div>
    );
}
}
}

export default App;