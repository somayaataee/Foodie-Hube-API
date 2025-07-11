# 🍔 Foodie Hub - RESTful API

This is the backend RESTful API for **Foodie Hub**, a public food ordering system.  
Users can browse restaurants, view menus, register customers, and place orders.

---

## 📁 Project Structure

```
Foodie Hub/
├── app.js
├── .env
├── DB.js
├── models/
├── controllers/
├── routes/
├── schema.sql
└── README.md
```

---

## ✨ Features

- Manage **Restaurants**
- Manage **Customers**
- Manage **Menus**
- Manage **Orders** 

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- PostgreSQL (with `pg` library)
- ESM Modules
- RESTful API structure
- `dotenv` for managing environment variables

---

## 🛠️ Installation & Setup

1. **Clone the project (if hosted on GitHub)**

   ```bash
   git clone https://github.com/somayaataee/Foodie-Hube-API.git
   cd foodie-hub-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create `.env` file**

   Inside your project folder, create a `.env` file and add the following:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_USER=postgres
   DB_PASSWORD=postgres
   DB_NAME=foodiehub
   DB_PORT=5432
   ```

4. **Create the database and tables**

   - Open pgAdmin or your terminal
   - Create a new PostgreSQL database named `foodiehub`
   - Run the SQL schema file: `schema.sql`

5. **Run the server**

   ```bash
   node app.js
   ```

---

## 🚀 API Endpoints

### 🏪 Restaurant

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| GET    | `/restaurant`         | Get all restaurants   |
| POST   | `/restaurant`         | Create a restaurant   |
| PUT    | `/restaurant/:id`     | Update a restaurant   |
| DELETE | `/restaurant/:id`     | Delete a restaurant   |

---

### 👤 Customer

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| GET    | `/customer`         | Get all customers   |
| POST   | `/customer`         | Create a new customer |
| PUT    | `/customer/:id`     | Update a customer   |
| DELETE | `/customer/:id`     | Delete a customer   |

---

### 🍽️ Menu

| Method | Endpoint            | Description         |
|--------|---------------------|---------------------|
| GET    | `/menu`             | Get all menu items  |
| POST   | `/menu`             | Create a menu item  |
| PUT    | `/menu/:id`         | Update a menu item  |
| DELETE | `/menu/:id`         | Delete a menu item  |

---

### 🧾 Order

| Method | Endpoint            | Description           |
|--------|---------------------|-----------------------|
| GET    | `/order`            | Get all orders        |
| POST   | `/order`            | Create a new order    |
| PUT    | `/order/:id`        | Update order status   |
| DELETE | `/order/:id`        | Delete an order       |

---

## 🧪 Testing with Postman

You can test all API routes using [Postman](https://www.postman.com/):

- Set `Content-Type: application/json` in headers
- Use `raw → JSON` in request body
- Base URL: `http://localhost:3000`

Example body for creating a customer:

```json
{
  "name": "ُُS",
  "phone": "0700000000"
}
```

---

## 👩‍💻 Developer

- 👩‍💻 **Somaya Ataie**
- 📍 Herat, Afghanistan
- 💻 junior FullStack Engineer

---

## 📝 License

This project is created for educational purposes only.
