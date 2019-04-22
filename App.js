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
      <div>
      <h1>Type your social media site here</h1><br />
      <h3>Instagram/Twitter/Reddit</h3>
        <input onUpdate={(event) => {
          this.setState({medianame: event.target.value})
        }}></input>
        <p>Your selected social media site is: </p>
      </div>// build input
        // on update: update state
    )
  }

/*
  if (input.value === "instagram") {
  return (
    <div className="App">
      <header className="App-header">
        <p>Here is the site you requested: </p>
        <a href="https://www.instagram.com">Instagram</a>
      </header>
    </div>
  );
 }
  if (input.value === "reddit") {
     return (
    <div className="App">
      <header className="App-header">
        <p>Here is the site you requested: </p>
        <a href="https://www.reddit.com">Reddit</a>
      </header>
    </div>
  );
 }
  if (input.value === "twitter") {
    return (
    <div className="App">
      <header className="App-header">
        <p>Here is the site you requested: </p>
        <a href="https://www.twitter.com">Twitter</a>
      </header>
    </div>
);
}
}*/
}

export default App;