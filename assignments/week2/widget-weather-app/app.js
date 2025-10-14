import { apiKey } from './utils.js';

const weatherBackgrounds = {
  clear: 'linear-gradient(to right, #fceabb, #f8b500)',
  clouds: 'linear-gradient(to right, #bdc3c7, #2c3e50)',
  rain: 'linear-gradient(to right, #4e54c8, #8f94fb)',
  drizzle: 'linear-gradient(to right, #4e54c8, #8f94fb)',
  thunderstorm: 'linear-gradient(to right, #373B44, #4286f4)',
  snow: 'linear-gradient(to right, #e6dada, #274046)',
  mist: 'linear-gradient(to right, #3e5151, #decba4)',
  fog: 'linear-gradient(to right, #3e5151, #decba4)',
  default: 'linear-gradient(to right, #74ebd5, #ACB6E5)',
};

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) return alert('Enter a city name');

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod !== '200') return alert(data.message);

    displayForecast(data);
    updateBackground(data.list[0].weather[0].main);
  } catch (error) {
    console.error(error);
    alert('Error fetching weather');
  }
}

function displayForecast(data) {
  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = '';

  const daily = data.list.filter((item) => item.dt_txt.includes('12:00:00'));

  daily.forEach((day) => {
    const date = new Date(day.dt_txt).toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
    const temp = day.main.temp.toFixed(1);
    const desc = day.weather[0].description;
    const icon = `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.innerHTML = `
      <h3>${date}</h3>
      <img src="${icon}" alt="${desc}">
      <p>${desc}</p>
      <p>${temp} °C</p>
    `;
    forecastDiv.appendChild(dayDiv);
  });
}

function updateBackground(weather) {
  const bg =
    weatherBackgrounds[weather.toLowerCase()] || weatherBackgrounds.default;
  document.body.style.background = bg;
}

function submitFeedback() {
  const feedback = document.getElementById('feedbackInput').value.trim();
  const message = document.getElementById('feedbackMessage');

  if (!feedback) {
    message.textContent = 'Please write something!';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Thanks for your feedback!';
  message.style.color = 'green';

  document.getElementById('feedbackInput').value = '';
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('getWeatherBtn')
    .addEventListener('click', getWeather);
  document
    .getElementById('feedbackBtn')
    .addEventListener('click', submitFeedback);
});
