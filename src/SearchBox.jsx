import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';


function SearchBox({updateInfo}) {
    let [city,setCity] = useState("");
    let [error, setError] = useState(false);

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
   const API_KEY = "9a13ab405dd138d8727195709eea3de3";
    
  let getWeatherInfo = async() =>{

    try{
       let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
     console.log(jsonResponse);
    let result = {
      city:city,
      temp: jsonResponse.main.temp,
      tempMin:jsonResponse.main.temp_min,
      tempMax:jsonResponse.main.temp_max,
      humidity:jsonResponse.main.humidity,
      feelslike:jsonResponse.main.feels_like,
      weather:jsonResponse.weather[0].description,
    }
       console.log(result);
       return result;
      }
       catch(error){
        throw error;
       }
 
};
   
    let handleChange = (event) =>{
     setCity(event.target.value);
   }
    let handleSubmit = async(event) =>{
      try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
      }
        catch(error){
          setError(true);
        }
       
    }

    return(
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
      <TextField id="city"
       label="City name"
       variant="outlined" required 
       value={city}
       onChange={handleChange}/><br></br><br></br>
      <Button variant="contained" type='Submit'>  Search</Button>
      
      {error && <p style={{color:"red"}}>No such place Exists!</p>}
      
      </form>
    </div>
    )
}

export default SearchBox;
