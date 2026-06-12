🏙️ UrbanResolve – Citizen Complaint Management System
UrbanResolve is a full-stack MERN (MongoDB, Express, React, Node.js) web application designed to streamline the process of reporting and resolving civic issues within urban areas. The platform enables citizens to easily register complaints related to public services such as sanitation, infrastructure, water supply, and other municipal concerns.

Users can create an account, submit detailed complaints, and track their status in real time (e.g., Pending, In Progress, Resolved). The system ensures transparency by keeping citizens informed about the progress of their requests.

On the administrative side, municipal departments or authorities can view, manage, and update complaints efficiently, allowing for faster resolution and better coordination between departments.

This application is suitable for use by:

Citizens who want a simple and transparent way to report local issues
Municipal authorities who need a centralized system to manage complaints
Organizations aiming to digitize public grievance redressal systems
Overall, UrbanResolve demonstrates a scalable and production-ready architecture with secure authentication, RESTful APIs, and cloud deployment, making it a practical solution for real-world civic problem management.

🚀 Live Demo
🌐 Frontend (Vercel):
https://urban-resolve-six.vercel.app/

⚙️ Backend API (Render):
https://urban-resolve-7wfs.onrender.com

🧰 Tech Stack
Frontend
React.js
Axios
React Router DOM
Context API (or Redux if used)
Vite
Backend
Node.js
Express.js
JWT Authentication
bcrypt.js
express-fileupload
Database
MongoDB Atlas
Mongoose ODM
Deployment
Frontend: Vercel
Backend: Render
Database: MongoDB Atlas
✨ Key Features
👤 Citizen Module
User registration with detailed profile (Aadhaar, address, ward, block)
Secure login with JWT authentication
Profile management
Complaint submission
📝 Complaint System
Raise complaints with category & description
Track complaint status (Pending / In Progress / Resolved)
Upload attachments (if enabled)
🔐 Authentication & Security
JWT-based authentication
Password hashing using bcrypt
Protected routes
Role-based access (Citizen/Admin if implemented)
⚙️ Admin Features (if included)
View all complaints
Update complaint status
Manage departments
📁 Project Structure
UrbanResolve/
│
├── client/ (React Frontend)
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/ (Node Backend)
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   └── config/
│   └── server.js
⚙️ Environment Variables
Backend (.env)
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
FRONTEND_URL=https://urban-resolve-six.vercel.app
Frontend (.env)
VITE_API_BASE_URL=https://urban-resolve-7wfs.onrender.com
🔌 API Endpoints (Sample)
Authentication
POST /api/v1/citizen/register
POST /api/v1/citizen/login
Profile
GET /api/v1/citizen/profile
PUT /api/v1/citizen/profile
Complaints
POST /api/v1/complaints
GET /api/v1/complaints
🧪 How to Run Locally
1. Clone Repository
git clone https://github.com/your-username/urban-resolve.git
2. Install Dependencies
Backend
cd server
npm install
Frontend
cd client
npm install
3. Run Project
Backend
npm run dev
Frontend
npm run dev
📌 Future Improvements
Real-time complaint tracking (Socket.io)
Email/SMS notifications
Advanced admin dashboard
Analytics for complaints
Mobile responsive optimization
