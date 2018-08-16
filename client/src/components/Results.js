import React from "react";
import  "./Components.css";
import clouds from "../clouds-cloudporn-weather-lookup-158163.jpeg";
import sun from "../pexels-photo-281260.jpeg"; 
import scattered from "../sky-sunny-clouds-cloudy.jpg"
import few from "../pexels-photo-96622.jpeg"
import day from "../blue-clouds-day-fluffy-53594.jpeg"
import light from "../pexels-photo-994078.jpeg"
import overcast from "../gray-overcast-sky.jpg"
import Moment from 'react-moment';

const Results = props => (

    <div className="card">
        <img    className="card-img-top picture" 
                src={(props.weather == "clear sky") ? sun : 
                (props.weather == "scattered clouds") ? scattered: 
                (props.weather == "light rain") ? light:
                (props.weather == "few clouds") ? few: 
                (props.weather == "broken clouds") ? few: 
                (props.weather == "overcast clouds") ? overcast: 
                (props.weather == "moderate rain") ? clouds: 
                day}
                alt="weather image"/>
            <div className="card-body">
            
                Date and Time: <Moment>{props.dateTime}</Moment>
                
                <br/>
                Temp: {props.temp}
                <br/>
                Weather: {props.weather}
                <br/>
                Key: {props.id}
            
            </div>  
    </div>

);

export default Results;