import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    window.EmbedManager.embed({
      key: "https://fs28.formsite.com/res/showFormEmbed?EParam=m%2FOmK8apOTC%2FjFrII6XaqmrYe2Y6sJfY&146872609",
      width: "100%",
      mobileResponsive: true
    });
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <div>
        <div id="apply_form">
          <a name="form146872609" id="formAnchor146872609"></a>
        </div>
      </div>
      </div>
    );
  }
}

export default App;


