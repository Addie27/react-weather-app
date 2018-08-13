import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import Results from "./Results";
import WeatherBox from "./WeatherBox";
import API from "../utils/API";

class Forecast extends Component {
  state = {
    results: [],
    weather: ""
  };


  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    API.search()
      .then(res => 
     
        // console.log(res.data.list)
        this.setState({ results: res.data.list }))
      
      .catch(err => console.log(err))
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

        {this.state.results.length ? (
          <WeatherBox>
            {this.state.results.map(result => (
              <Results
                key={result.dt_txt}
                dateTime={result.dt_txt}
                temp={result.main.temp}
                weather={result.weather.map(weather => (
                  this.setState.weather = weather.description     
                )
              )}
                img={this.state.weather === "clear sky" ? "url('../sky-sunny-clouds-cloudy.jpg')" : "url('../clouds-cloudporn-weather-lookup-158163.jpeg')"}
              />
            ))}
          </WeatherBox>
        ) : (
            <h2 className="text-center">No Weather to Report</h2>
          )}
      </div>
    );
  }
}

export default Forecast;