import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card';

class App extends React.Component {
  render () {
    return <div className="app-wrapper">
      <div className="title"><h1>Simple MadLibs</h1><h2>by James Youngblood</h2></div>
      
      <Card />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));