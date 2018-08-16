import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import Results from "./Results";
import WeatherBox from "./WeatherBox";
import API from "../utils/API";
import Grid from 'react-css-grid'
import  "./Components.css";


const results = [];
class Forecast extends Component {

  constructor(props) {
    super(props)
      this.state = {
        results: []
       
  }
}; 


  componentDidMount() {
    this.getWeather();
  }

  filterResults = () => {
    results.splice(0, 1, 8, 9, 16, 17, 24, 25, 32, 33)
  
  }

  getWeather = () => {
    API.search()
    
      .then(
        res => 
        this.setState({ results: res.data.list })
        
      )
      this.filterResults();
            
  };

  

  // handleInputChange = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchGiphy(this.state.search);
  // };

  render() {
    return (
      
      <div className="container">
        <h1>Philadelphia Weather Forecast</h1>
     
           {this.state.results.length ? (
          <WeatherBox>
            <Grid
             width={120}
             gap={10}>

            {this.state.results.map((result, i) => (
           
              <Results
                
                key={i}
                id={i}
                dateTime={result.dt_txt}
                temp={result.main.temp}
                weather={result.weather.map(weather => (
                  weather.description     
                )
               
              )} 
                
              />
              
            ))}
          
            </Grid>
          </WeatherBox>
        ) : (
            <h2 className="text-center">No Weather to Report</h2>
          )}
        
    </div>      
    );
  }
}

export default Forecast;