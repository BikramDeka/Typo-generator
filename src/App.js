import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Title from "./component/Title.js";
import Form from "./component/Form.js"
import './App.css';

class App extends Component {
  constructor(){
    super();
  }



  render() {
    return (
      <div className="App container">
          <Title/>
          <Form/>
      </div>
    );
  }
}

export default App;
