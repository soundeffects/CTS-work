import React from 'react';

const Input = (title, handleInput) => {
  return <div className="input-wrapper">
    <input className="word-input" name={ title.substring(0,3).toLowerCase() } onChange={handleInput} />
    <br/>
    <label>{title}</label>
  </div>;
};

export default Input;