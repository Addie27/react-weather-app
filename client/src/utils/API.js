import axios from "axios";

const BASEURL = "http://api.openweathermap.org/data/2.5/forecast?id=4560349&units=imperial&APPID=";
const APIKEY = "0ccc5072a310bb845ea85aac09672a4f";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY);
  }
};