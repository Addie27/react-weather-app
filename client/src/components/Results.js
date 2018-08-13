import React from "react";

const Results = props => (
  <ul className="list-group">
    {props.results.map(result => (
        // console.log(result)
        console.log("Date and Hour: " + result.dt_txt + "Temp: " + result.main.temp + "Weather: " + result.weather.description) 
    //   <li className="list-group-item" key={result.weather}>
    //     <div>
    //     {result.weather}
    //     </div>
    //   </li>
    ))}
    
  </ul>
  
);

export default Results;