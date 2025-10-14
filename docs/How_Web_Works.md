# How Web Works

### 1. Request Flow

1. **Client enters website URL** in the browser's address bar (e.g., `example.com`).
2. **DNS Resolution:** Domain Name System translates the domain into the server's IP address.
3. **Browser sends HTTP GET request** to the server's IP address.
4. **Server processing:** The server receives the request, processes it, and generates a response. It might use a database or fetch data from external services depending on the request.
5. **Server response:** The server sends back the response (HTML, file, JSON, etc.) to the client.
6. **Rendering:** The client (browser) renders the response for the user to view.

---

## 2. HTTP vs HTTPS

**HTTP**

- Stands for HyperText Transfer Protocol.
- Transmits data over the web.
- Not encrypted, vulnerable to eavesdropping.
- Port: 80.

**HTTPS**

- Secure version of HTTP using SSL/TLS encryption.
- Protects data during transmission.
- Port: 443.

**Key Points:**

- Browser sends HTTP/HTTPS requests to the server for a specific resource (webpage, image, JSON, etc.).
- HTTP Methods define the type of action requested: **GET, POST, PUT, PATCH, DELETE**.
