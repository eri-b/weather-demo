const setGif = (desc) => {
  const img = document.querySelector('#gif');
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7aFa3m21bGaw1XdvW85BAmOs6fQl3UtR&s=${desc}`, { mode: 'cors' })
    .then((response) => response.json())
    .then((response) => {
      img.src = response.data.images.original.url;
    })
    .catch((e) => { console.log('catch: ', e); });
};

const displayWeather = (weather) => {
  document.querySelector('#loc').innerHTML = weather.loc;
  document.querySelector('#temp').innerHTML = `${Math.round(weather.temp)}&#176;C`;
  document.querySelector('#desc').innerHTML = weather.desc.toUpperCase();
  const iconurl = `https://openweathermap.org/img/w/${weather.icon}.png`;
  document.querySelector('#icon img').src = iconurl;
  setGif(weather.desc);
};


export default displayWeather;
