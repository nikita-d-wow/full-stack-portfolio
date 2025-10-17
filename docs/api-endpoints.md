# JSONPlaceholder Common Endpoints 🧩

**Base URL:**  
https://jsonplaceholder.typicode.com

---

## 1. Posts

- GET `/posts` → Get all posts
- GET `/posts/{id}` → Get a single post by ID
- POST `/posts` → Create a new post
- PUT `/posts/{id}` → Replace a post entirely
- PATCH `/posts/{id}` → Update part of a post
- DELETE `/posts/{id}` → Delete a post

---

## 2. Comments

- GET `/comments` → Get all comments
- GET `/comments/{id}` → Get a single comment by ID
- GET `/posts/{id}/comments` → Get comments for a specific post
- POST `/comments` → Add a new comment
- DELETE `/comments/{id}` → Delete a comment

---

## 3. Users

- GET `/users` → Get all users
- GET `/users/{id}` → Get a specific user
- POST `/users` → Create a new user (mock)
- PUT `/users/{id}` → Update user data
- DELETE `/users/{id}` → Delete a user

---

## 4. Todos

- GET `/todos` → Get all todos
- GET `/todos/{id}` → Get a specific todo
- POST `/todos` → Add a new todo
- PATCH `/todos/{id}` → Update a todo partially (e.g., completed status)
- DELETE `/todos/{id}` → Remove a todo

---

## 5. Albums & Photos

- GET `/albums` → Get all albums
- GET `/albums/{id}` → Get album by ID
- GET `/albums/{id}/photos` → Get photos in an album
- GET `/photos` → Get all photos
- GET `/photos/{id}` → Get photo by ID

---

## Notes

- JSONPlaceholder is a **fake online REST API**—no real data is stored.
- Perfect for **testing** and **learning CRUD operations**.
- All `POST`, `PUT`, `PATCH`, and `DELETE` requests return a **mock response**.
- No authentication required.

---

### OpenWeatherMap: Common Endpoints

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
