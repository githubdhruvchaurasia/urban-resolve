const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const path = require('path');

const connectDB = require('./src/config/db');

// Load env
dotenv.config();

// Create app FIRST (important)
const app = express();

// Connect DB
connectDB();

// ================= CORS CONFIG =================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://urban-resolve-six.vercel.app",
  "https://urban-resolve-20h0f0cma-dhruv-chaurasias-projects.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server or Postman requests (no origin)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// ================= LOGGING =================
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// ================= BODY PARSERS =================
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// ================= FILE UPLOAD =================
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
}));

// ================= STATIC FILES =================
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ================= HEALTH CHECK =================
app.get('/', (req, res) => {
  res.status(200).json({
    message: "UrbanResolve API is running"
  });
});

// ================= ROUTES =================
const adminRoutes = require('./src/routes/adminRoutes');
const citizenRoutes = require('./src/routes/citizenRoutes');
const departmentRoutes = require('./src/routes/departmentRoutes');
const complaintRoutes = require('./src/routes/complaintRoutes');
const noticeRoutes = require('./src/routes/noticeRoutes');
const contactRoutes = require('./src/routes/contactRoutes');
const notificationRoutes = require('./src/routes/notificationRoutes');
const messageRoutes = require('./src/routes/messageRoutes');

// Mount routes
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/citizen', citizenRoutes);
app.use('/api/v1/dept', departmentRoutes);
app.use('/api/v1/complaints', complaintRoutes);
app.use('/api/v1/notices', noticeRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/messages', messageRoutes);

// ================= ERROR HANDLING =================
const { notFound, errorHandler } = require('./src/middlewares/errorMiddleware');

app.use(notFound);
app.use(errorHandler);

// ================= START SERVER =================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});