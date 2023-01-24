import { Box, Flex } from "@chakra-ui/react";


export default function DisplayWeather(props) {
    
    return(
        <>
        <Flex justifyContent='center'alignItems='center' fontSize='3rem' >{props.weather.city.name}</Flex>
        {props.weather ? (
          <div className="container">
            {props.weather.list.map((item, index) => {
              return index % 8 === 0 ? (
                <Box key={index} className="temp">
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                  <Box fontSize='1.7rem'>{item.main.temp.toFixed()}°F </Box>
                  <Box>Feels Like {item.main.feels_like.toFixed()}</Box>
                  <Box>{item.dt_txt.slice(0,10)} </Box>
                  
                  
                </Box> 
      
              ) : null;
            })}
          </div>
        ) : null}
        </>
    )
}