import React, { Component } from 'react';
import {ReactComponent as logo} from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {medianame: "",
                    inputvalue: ""};
      this.add = this.add.bind(this);
  }

  add(event) {
    this.setState({medianame: event.target.value});
    console.log("Added!!!");
    return this.state.medianame;
  }

  render() {
      return (
      <div>
      <h1>Type your social media site here</h1><br />
      <h3>Instagram/Twitter/Reddit</h3>
        <input id="foo" value={this.state.medianame} onChange={(event) => {
            let inputvalue = event.target.value;
            this.setState({inputvalue});
            return this.state.medianame, this.state.inputvalue;
        }} onKeyPress={(event) => {
          console.log(event.key);
          if (event.key === "Enter") {
            let newval = event.add;
            this.setState({medianame: this.state.inputvalue});
            return this.state.medianame;
          }
          else {
            console.log("This site is not supported");
            return this.state.medianame;
          }
        }} />
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

