import React from 'react';
import Card from './card';

class App extends React.Component {
  render () {
    return <div className="app-wrapper">
      <div className="title"><h1>Simple MadLibs</h1><h2>by James Youngblood</h2></div>
      
      <Card />
    </div>;
  }
}

React.render(<App/>, document.getElementById('app'));