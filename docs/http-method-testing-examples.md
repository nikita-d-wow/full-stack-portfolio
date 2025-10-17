### HTTP Method Testing Examples For JSONPlaceholder:

### GET

```http
GET /posts/1 HTTP/1.1
Host: jsonplaceholder.typicode.com

Response:

{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit suscipit recusandae"
}


### POST

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

```
