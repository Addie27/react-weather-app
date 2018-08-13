import React, { Component } from "react";
// import SearchForm from "./SearchForm";
import Results from "./Results";
import API from "../utils/API";

class Forecast extends Component {
  state = {
    results: []
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
      <div>
        {/* <SearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        /> */}
        <Results results={this.state.results} />
      </div>
    );
  }
}

export default Forecast;