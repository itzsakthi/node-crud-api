# Express MongoDB CRUD API

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to demonstrate basic CRUD (Create, Read, Update, Delete) operations for users.

---

## 🚀 Features
- Create a new user
- Fetch all users
- Fetch a single user by ID
- Update a user
- Delete a user
- MongoDB + Mongoose integration
- Error handling

---

## 📂 Project Structure
```plaintext
root
├── models
│   └── user.model.js
├── controllers
│   └── user.controller.js
├── routes
│   └── user.route.js
└── index.js


⚡ Getting Started

1️⃣ Clone the repo

git clone https://github.com/itzsakthi/node-crud-api.git
cd node-crud-api


2️⃣ Install dependencies  

npm install

3️⃣ Setup environment

Connect your mongodb connection string in index.js file


4️⃣ Run the app   
npm run dev

Server will start at:
👉 http://localhost:3000


📌 API Endpoints
| Method | Endpoint                   | Description        |
| ------ | -------------------------- | ------------------ |
| POST   | `/api/users`               | Create new user    |
| GET    | `/api/users`               | Get all users      |
| GET    | `/api/users/:id`           | Get users by ID    |
| PUT    | `/api/users/:id`           | Update user        |
| DELETE | `/api/users/:id`           | Delete user        |



🛠 Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Nodemon (dev)
