# OpenWeatherMap API Overview

OpenWeatherMap provides APIs for real-time, forecast, and historical weather data — accessible in **JSON, XML, and HTML** formats.

---

## Key Endpoints

### 1. Current Weather Data

Retrieve current weather for a specific city.

- **Endpoint:** `/weather`
- **Parameters:** `q` (city name), `appid` (API key)
- **Example:**  
  `https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key`

---

### 2. Forecast Data

Fetch weather forecast data for upcoming days.

- **Endpoint:** `/forecast`
- **Example:**  
  `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=your_api_key`

---

### 3. One Call API 3.0

Get complete weather data (current, hourly, daily, and historical).

- **Endpoint:** `/onecall`
- **Example:**  
  `https://api.openweathermap.org/data/2.5/onecall?lat=51.51&lon=-0.13&appid=your_api_key`

---

### 4. Geocoding API

Convert location names into coordinates.

- **Endpoint:** `/geo/1.0/direct`
- **Example:**  
  `https://api.openweathermap.org/data/2.5/geo/1.0/direct?q=London&appid=your_api_key`

---

### 5. Historical Weather

Retrieve past weather data.

- **Endpoint:** `/timemachine`
- **Example:**  
  `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=51.51&lon=-0.13&dt=1609459200&appid=your_api_key`

---

## Authentication

1. Sign up on [OpenWeatherMap](https://openweathermap.org/).
2. Generate an API key in your dashboard.
3. Include it as `appid` in every request.

---

## Units of Measurement

- Temperature: Kelvin (default), Celsius (`metric`), Fahrenheit (`imperial`)
- Pressure: hPa
- Wind Speed: m/s or mph

Use `units=metric` or `units=imperial` in requests.
