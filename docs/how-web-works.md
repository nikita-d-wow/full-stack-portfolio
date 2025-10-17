# How the Web Works

1. The client enters a website name in the browser’s address bar.
2. **DNS (Domain Name System)** translates the domain (e.g., example.com) into the server’s IP address.
3. The browser sends an **HTTP GET request** to the server’s IP address.
4. The **server receives the request**, processes it, and generates a response.
   - It might also use a **database** or **external service** to fetch data.
5. The **server sends the response** (could be HTML, JSON, or files) back to the client.
6. The **client (browser)** renders the response for the user to view.

---

## HTTP vs HTTPS

- **HTTP** stands for **HyperText Transfer Protocol** — used for transmitting data over the web.  
  It defines how requests and responses should look and how servers should handle them.

- **HTTPS** is the **secure version** of HTTP.  
  It uses **SSL/TLS encryption** to protect data during transmission.

---

## HTTP Methods

Commonly used HTTP request methods:

- **GET:** Retrieve data
- **POST:** Send or create new data
- **PUT:** Update existing data
- **PATCH:** Modify partial data
- **DELETE:** Remove data
