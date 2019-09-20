const toF = (cel) => {
  const f = cel * (9 / 5) + 32;
  return f;
};

const parseWeather = (data) => {
  const obj = {
    temp: data.main.temp,
    desc: data.weather[0].description,
    icon: data.weather[0].icon,
  };
  return obj;
};

const displayWeather = (weather) => {
  console.log(weather);
  // console.log(toF(weather));
};

const findWeather = (location) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=24bc3889266a1fd87fecc9abc9dd9f33&units=metric`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      const weather = parseWeather(response);
      displayWeather(weather);
    });
};

findWeather('Brooklyn');


document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const loc = document.querySelector('#location').value;
  findWeather(loc);
});
