import React from "react";
import  "./Components.css";

const Results = ({ dateTime, temp, weather, img }) => (
    <div className="card">
        <img    className="card-img-top" 
                src={img}
                alt="weather image"/>
            <div className="card-body">
            
                <span>Date and Time: {dateTime}</span>
                <br/>
                <span>Temp: {temp}</span>
                <br/>
                <span>Weather: {weather}</span>
            
            </div>  
    </div>

);

export default Results;