const apiKey = 'c770fd8ad3d68fea6ebf0cf63b4445f5';

// Map weather types to background gradients
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
    updateBackground(data.list[0].weather[0].main); // set background using first forecast item
  } catch (error) {
    console.error(error);
    alert('Error fetching weather');
  }
}

function displayForecast(data) {
  const forecastDiv = document.getElementById('forecast');
  forecastDiv.innerHTML = '';

  // Filter for 12:00 PM each day
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

// Update background using object mapping
function updateBackground(weather) {
  const bg = weatherBackgrounds[weather.toLowerCase()] || weatherBackgrounds.default;
  document.body.style.background = bg;
}

// Feedback handling
function submitFeedback() {
  const feedback = document.getElementById('feedbackInput').value.trim();
  const message = document.getElementById('feedbackMessage');

  if (!feedback) {
    message.textContent = 'Please write something!';
    message.style.color = 'red';
    return;
  }

  // Thank-you message
  message.textContent = 'Thanks for your feedback! 😊';
  message.style.color = 'green';

  // Clear textarea
  document.getElementById('feedbackInput').value = '';
}
