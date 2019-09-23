import findWeather from './app';

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
      e.target.innerHTML = 'To &#176;C';
    } else {
      temp.innerHTML = `${localStorage.getItem('ce')}&#176;C`;
      e.target.classList.remove('fa');
      e.target.classList.add('ce');
      e.target.innerHTML = 'To &#176;F';
    }
  });
};


export default events;
