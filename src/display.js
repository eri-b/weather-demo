const displayWeather = (weather) => {
  console.log(weather.loc);
  document.querySelector('#loc').innerHTML = weather.loc;
  document.querySelector('#temp').innerHTML = `${Math.round(weather.temp)}&#176;C`;
  document.querySelector('#desc').innerHTML = weather.desc;
  const iconurl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  document.querySelector('#icon img').src = iconurl;
};

export default displayWeather;
