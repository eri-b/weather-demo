const displayWeather = (weather) => {
  console.log(weather.loc);
  document.querySelector('#loc').innerHTML = weather.loc;
  document.querySelector('#temp').innerHTML = `${Math.round(weather.temp)}&#176;C`;
  document.querySelector('#desc').innerHTML = weather.desc;
  const iconurl = `http://openweathermap.org/img/w/${weather.icon}.png`;
  const img = document.createElement('img');
  img.src = iconurl;
  document.querySelector('#icon').appendChild(img);
};

export default displayWeather;
