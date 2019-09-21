import displayWeather from './display';

const parseWeather = (data) => {
  const obj = {
    loc: data.name,
    temp: data.main.temp,
    desc: data.weather[0].description,
    icon: data.weather[0].icon,
  };
  return obj;
};

const setLocal = (temp) => {
  localStorage.setItem('celsius', temp);
};

const findWeather = (location) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=24bc3889266a1fd87fecc9abc9dd9f33&units=metric`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const weather = parseWeather(response);
      displayWeather(weather);
      setLocal(weather.temp);
    });
};

const toF = (cel) => {
  const f = cel * (9 / 5) + 32;
  return f;
};

const toC = (f) => {
  const c = (f - 32) * (5 / 9);
  return c;
};

const events = () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.querySelector('#location').value;
    findWeather(loc);
  });

  document.querySelector('#tempToggle').addEventListener('click', (e) => {
    e.preventDefault();
    const temp = document.querySelector('#temp');
    // const newTemp = localStorage.getItem('celsius') ? toF(localStorage.getItem('celsius')) : toF(localStorage.getItem('celsius'))
    // const farh = toF(parseInt(cel));
    // console.log(farh);
  });
};


export { events, findWeather };
