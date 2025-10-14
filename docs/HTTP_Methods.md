### HTTP Method Testing Examples

#### API 1: JSON Placeholder

#### GET

GET /posts/1 HTTP/1.1
Host: jsonplaceholder.typicode.com

Response:

{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati",
"body": "quia et suscipit suscipit recusandae"
}

#### POST

POST /posts HTTP/1.1
Content-Type: application/json
Host: jsonplaceholder.typicode.com

{
"title": "foo",
"body": "bar",
"userId": 1
}

Response:

{
"id": 101,
"title": "foo",
"body": "bar",
"userId": 1
}

Status Codes Tested:
200 OK
201 Created
404 Not Found

#### API 2: OpenWeatherMap

#### GET

GET /weather?q=Delhi&appid=YOUR_KEY HTTP/1.1
Host: api.openweathermap.org

Response:

{
"coord": { "lon": 77.2167, "lat": 28.6667 },
"weather": [ { "main": "Clouds", "description": "broken clouds" } ],
"main": { "temp": 302.15, "feels_like": 305.15 },
"name": "Delhi"
}

Status Codes Tested:
200 OK — Valid city and key
401 Unauthorized — Invalid or missing key
404 Not Found — Invalid city name
