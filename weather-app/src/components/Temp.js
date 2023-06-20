import React,{useState,useEffect} from 'react'
import Weather from './Weather';
import "./style.css";
const Temp = () => {
    const [searchValue, setSearchValue] = useState("pune");
    const [tempInfo, setTempInfo] = useState({});
  
    const getWeatherInfo = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6ab53dbc0c0a397e770d17a8c844c968`;
  
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        const { temp, humidity, pressure } = data.main;
        const { main: weathermood } = data.weather[0];
        const { name } = data;
        const { speed } = data.wind;
        const { country, sunset } = data.sys;
  
        const myNewWeatherInfo = {
          temp,
          humidity,
          pressure,
          weathermood,
          name,
          speed,
          country,
          sunset,
        };
  
        setTempInfo(myNewWeatherInfo);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getWeatherInfo();
    }, []);
  
    return (
      <>
        <div className="wrap">
          <div className="search">
            <input
              type="search"
              placeholder="search..."
              autoFocus
              id="search"
              className="searchTerm"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
  
            <button
              className="searchButton"
              type="button"
              onClick={getWeatherInfo}>
              Search
            </button>
          </div>
        </div>
  
        {/* our temp card  */}
        <Weather {...tempInfo} />
      </>
    );
}

export default Temp


//api key - 6ab53dbc0c0a397e770d17a8c844c968
