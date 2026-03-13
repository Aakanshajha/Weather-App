 import SearchBox from './SearchBox';
 import InfoBox from './InfoBox';
import { useState } from 'react';
 
 function weatherApp(){
     const [weatherInfo, setWeatherInfo] = useState(
        {
            feelsLike: 24.84,
            temp: 25.05,
            tempMin:25.05,
            tempMax:25.05,
            humidity:47,
            weather:"haze",
            city:"Delhi",
         }
     )

      let updateInfo = (newInfo) =>{
         setWeatherInfo(newInfo);
      }


    return(
    <div style={{textAlign:"center"}}>
      <h2>Search for the weather</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
    );
}
export default weatherApp;