# 🏙️ UrbanResolve – Citizen Complaint Management System

UrbanResolve is a full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application designed to streamline the process of reporting and resolving civic issues within urban areas.

The platform enables citizens to easily register complaints related to public services such as sanitation, infrastructure, water supply, and other municipal concerns.

Users can create an account, submit detailed complaints, and track their status in real time (**Pending**, **In Progress**, **Resolved**). The system ensures transparency by keeping citizens informed about the progress of their requests.

On the administrative side, municipal departments or authorities can efficiently view, manage, and update complaints, enabling faster issue resolution and better inter-department coordination.

---

## 🎯 Who Can Use This?

* 👨‍💼 **Citizens** who want a simple and transparent way to report local issues.
* 🏛️ **Municipal Authorities** who need a centralized system to manage complaints.
* 🌐 **Organizations** aiming to digitize public grievance redressal systems.

Overall, UrbanResolve demonstrates a scalable and production-ready architecture with secure authentication, RESTful APIs, and cloud deployment, making it a practical solution for real-world civic problem management.

---

## 🚀 Live Demo

### 🌐 Frontend (Vercel)

https://urban-resolve-six.vercel.app/

### ⚙️ Backend API (Render)

https://urban-resolve-7wfs.onrender.com

---

## 🧰 Tech Stack

### Frontend

* React.js
* Axios
* React Router DOM
* Context API *(or Redux if implemented)*
* Vite

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt.js
* express-fileupload

### Database

* MongoDB Atlas
* Mongoose ODM

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## ✨ Key Features

### 👤 Citizen Module

* User registration with detailed profile

  * Aadhaar
  * Address
  * Ward
  * Block
* Secure login with JWT authentication
* Profile management
* Complaint submission

### 📝 Complaint Management

* Raise complaints with category and description
* Track complaint status:

  * Pending
  * In Progress
  * Resolved
* Upload attachments *(if enabled)*

### 🔐 Authentication & Security

* JWT-based authentication
* Password hashing using bcrypt
* Protected routes
* Role-based access control *(Citizen/Admin if implemented)*

### ⚙️ Admin Features

* View all complaints
* Update complaint status
* Manage departments
* Monitor complaint resolution workflow

---

## 📁 Project Structure

```bash
UrbanResolve/
│
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│
├── server/                     # Node.js Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── config/
│   │
│   └── server.js
│
└── README.md
```

---

## ⚙️ Environment Variables

### Backend (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=https://urban-resolve-six.vercel.app
```

### Frontend (`.env`)

```env
VITE_API_BASE_URL=https://urban-resolve-7wfs.onrender.com
```

---

## 🔌 API Endpoints

### Authentication

```http
POST /api/v1/citizen/register
POST /api/v1/citizen/login
```

### Profile

```http
GET  /api/v1/citizen/profile
PUT  /api/v1/citizen/profile
```

### Complaints

```http
POST /api/v1/complaints
GET  /api/v1/complaints
```

---

## 🧪 How to Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/urban-resolve.git
cd urban-resolve
```

### 2️⃣ Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

### 3️⃣ Configure Environment Variables

Create `.env` files in both the `server` and `client` directories and add the required environment variables.

### 4️⃣ Run the Project

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm run dev
```

---

## 📌 Future Improvements

* Real-time complaint tracking using Socket.io
* Email and SMS notifications
* Advanced admin dashboard
* Complaint analytics and reporting
* Department-wise complaint assignment
* Mobile responsiveness improvements
* PWA (Progressive Web App) support

---

## 👨‍💻 Author

Developed by Dhruv Chaurasia using the MERN Stack.
