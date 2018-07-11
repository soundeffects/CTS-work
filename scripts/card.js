import React from 'react';
import Input from "./input";
import Content from "./content";

const wordTypes = ["Color", "Plural Noun", "Adjective", "Pronoun", "Noun", "Celebrity"];
const getInitialState = () => {
  return { showContent: false };
};

class Card extends React.Component {
  constructor() {
    super();
    this.state = getInitialState();
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleInput(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.showContent) {
      this.setState(getInitialState());
    } else {
      this.setState({ showContent: true });
    }
  }
  
  render() {
    return <form className="card" onSubmit={this.handleSubmit}>
      <ol className="inputs">{ wordTypes.map(title => <li> { Input(title, this.handleInput) } </li>) }</ol>
      <button type="submit">{ this.state.showContent ? "Hide" : "Show" } Madlib</button>
      { this.state.showContent ? <Content data={this.state} /> : null }
    </form>;
   }
}

export default Card;