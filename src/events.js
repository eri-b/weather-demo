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
      console.log(response);
      const weather = parseWeather(response);
      displayWeather(weather);
    });
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
    if (e.target.classList.contains('ce')) {
      temp.innerHTML = `${localStorage.getItem('fa')}&#176;F`;
      e.target.classList.remove('ce');
      e.target.classList.add('fa');
      e.target.innerHTML = "To &#176;C"
    } else {
      temp.innerHTML = `${localStorage.getItem('ce')}&#176;C`;
      e.target.classList.remove('fa');
      e.target.classList.add('ce');
      e.target.innerHTML = "To &#176;F"
    }
  });
};


export { events, findWeather };
