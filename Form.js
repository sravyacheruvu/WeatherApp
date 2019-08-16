import React from 'react';
import './App.css';

const Form = (props) => {
  return (
      <form onSubmit={props.loadWeather}  className='main-form' >
        <input type="text" name="city"  className='input-textbox'/>
        <button className='primary-button'>GO</button>
      </form>
  )
}

export default Form;