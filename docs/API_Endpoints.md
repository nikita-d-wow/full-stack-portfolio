## 1. API Exploration

Exploring and testing two public APIs:

- [JSONPlaceholder](https://jsonplaceholder.typicode.com) - A free fake API for testing and prototyping.

- [OpenWeatherMap](https://openweathermap.org/api) - A real-time data API.

## 2. API 1: JSONPlaceholder

### Base URL

"https://jsonplaceholder.typicode.com"

### Common Endpoints

| Endpoint   | HTTP Method | Description             | Example                                                    |
| ---------- | ----------- | ----------------------- | ---------------------------------------------------------- |
| `/posts`   | GET         | Get all posts           | `https://jsonplaceholder.typicode.com/posts`               |
| `/posts/1` | GET         | Get a single post by ID | `https://jsonplaceholder.typicode.com/posts/1`             |
| `/posts`   | POST        | Create a new post       | Body: `{ "title": "foo", "body": "bar", "userId": 1 }`     |
| `/posts/1` | PUT         | Update an existing post | Body: `{ "id": 1, "title": "updated", "body": "content" }` |
| `/posts/1` | DELETE      | Delete a post by ID     | —                                                          |

## 3. API 2: OpenWeatherMap

### Base URL

"https://api.openweathermap.org/data/2.5"

### Common Endpoints

- **/weather?q={city}**
  - Method: GET
  - Description: Get current weather by city name
  - Example: https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY

- **/forecast?q={city}**
  - Method: GET
  - Description: 5-day weather forecast
  - Example: https://api.openweathermap.org/data/2.5/forecast?q=London&appid=API_KEY

- **/air_pollution**
  - Method: GET
  - Description: Air quality data (lat/lon)
  - Example: https://api.openweathermap.org/data/2.5/air_pollution?lat=51.51&lon=-0.13&appid=API_KEY
