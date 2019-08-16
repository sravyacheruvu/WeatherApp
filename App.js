import React from 'react';
import Form from './Form.js';
import Weather from './Weather.js';
import City from './City.js';
import './App.css';

class App extends React.Component{

   render(){
    return(
      <div>
      

        <City />
        <Form loadWeather={this.getWeather} />

        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          humidity={this.state.humidity}
          description={this.state.description} />
      
      </div>
   )
  }


 state = {
    temperature: undefined,
    city: undefined,
    humidity: undefined,
    description: undefined,
    image:undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
     const ApiKey = '5fa95fa19b115cc02033f4c6e6ce36a8';
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + ApiKey);  
    const response =  await api_call.json();
      
    console.log(response);

    const numItemsToGenerate = 1;
    const numImagesAvailable = 1000;
    const apiCall =  await fetch('https://source.unsplash.com/featured/?weather,' + city)
      .then((response => {
        document.body.style.backgroundImage = `url(${response.url})`;
        document.body.style.backgroundRepeat = "no-repeat"
        document.body.style.backgroundWidth = "cover"
        document.body.style.backgroundheight = "cover"

      }))

    for(let i=0; i < numItemsToGenerate; i++){
      let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
    }

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      
    });

  }
}


export default App;