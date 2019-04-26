import React, { Component } from 'react';
import {ReactComponent as logo} from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {medianame: null};
  }

  add(e) {
    if (e.keyCode === "13") {
      this.setState({medianame: e.target.value});
    }
  }

  render() {
      return (
      <div>
      <h1>Type your social media site here</h1><br />
      <h3>Instagram/Twitter/Reddit</h3>
        <input onKeyDown={(event) => {
          if (event.keyCode === "13") {
            this.setState = this.setState.bind(this);
            this.setState({medianame: event.add});
          }
          else {
            console.log("This site is not supported");
          }
        }}></input>
        <p>Your selected social media site is: {this.state.medianame} </p>
      </div>// build input
        // on update: update state
    )
  }

  /*if (input.value === "instagram") {
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

*/
}

export default App;

