const apiKey = 'c770fd8ad3d68fea6ebf0cf63b4445f5';

function formatWeather(data) {
  return `
Weather for ${data.name}, ${data.sys.country}:
Temperature: ${data.main.temp} °C
Feels like: ${data.main.feels_like} °C
Weather: ${data.weather[0].main} (${data.weather[0].description})
Humidity: ${data.main.humidity}%
Wind Speed: ${data.wind.speed} m/s
`;
}

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`City not found: ${city}`);

    const data = await response.json();
    console.log(formatWeather(data));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getWeather('Bangalore');
getWeather('New York');
getWeather('Tokyo');
