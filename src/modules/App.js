import React, { Component } from 'react';
import '../App.css';
<<<<<<< HEAD
import Parse from 'parse';

class App extends Component {
  constructor(props){
    console.log('hello');
    super(props);
    document.title = "Vidi Health Coaching";
    Parse.initialize('appid');
    Parse.serverURL = 'https://sentience.herokuapp.com/parse';
=======

class App extends Component {
  constructor(props){
    super(props);
    document.title = "Vidi Health Coaching";
>>>>>>> 67a9a334e827a1c431e4fdb4d657f3b7b20b72b9
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    return (
      <div className="App">
        {children}
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"></link>
      </div>
    );
  }
}


export default App;
