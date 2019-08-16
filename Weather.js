import React from 'react';
import './App.css';

const Weather = (props) => {
  return(
       <div className='main-weatherinfo'>  
      	  {props.city && <p>Location: {props.city}</p>}
		  {props.temperature && <p> temperature: {props.temperature}</p>}
		  {props.humidity && <p>Humidity: {props.humidity}</p>}
		  {props.description && <p>Description: {props.description}</p>}
		</div>
   )
}

export default Weather;