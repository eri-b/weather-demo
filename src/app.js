import displayWeather from './display';

const toF = (cel) => {
  const f = Math.round(cel * (9 / 5) + 32);
  return f;
};

const setLocal = (temp) => {
  localStorage.setItem('ce', Math.round(temp));
  localStorage.setItem('fa', toF(temp));
};

const parseWeather = (data) => {
  const obj = {
    loc: data.name,
    temp: data.main.temp,
    desc: data.weather[0].description,
    icon: data.weather[0].icon,
  };
  setLocal(obj.temp);
  return obj;
};


const findWeather = (location) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=24bc3889266a1fd87fecc9abc9dd9f33&units=metric`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      const weather = parseWeather(response);
      displayWeather(weather);
    })
    .catch((e) => { console.log('catch: ', e); });
};

export default findWeather;
