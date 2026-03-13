import * as React from 'react';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


function InfoBox({info}) {
  const INIT_URl = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"

   const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90JTIwJTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const  RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJhaW4lMjAlMjB3ZWF0aGVyfGVufDB8fDB8fHww";



 
    return(
    <div className="InfoBox">
        {/* <h1>Weather Info -{info.weather}</h1> */}
        
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity>80 ? < ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" color= "text.secondary" component="span">
          <p> Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Maz Temp = {info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i>feels like{info.feelsLike}&deg;C</p>
        <p></p> 
        </Typography>
      </CardContent>
    </Card> 
    </div>

    </div>
    );
}

export default InfoBox;