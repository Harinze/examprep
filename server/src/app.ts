import express from 'express';
import cors from 'cors';
import { connectDB } from './db';
import userRoutes from './routes/userRoutes';
import { verifyFirebaseToken } from './middleware/authMiddleware';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(verifyFirebaseToken);

// Routes
app.use('/api/user', userRoutes);

// Root response
app.get('/', (_req, res) => {
  res.status(200).json({
    message: '🚀 ExamPrep API server is running!',
    status: 'OK',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// Database
connectDB();

// Server
app.listen(3001, () => {
  console.log('Server running at http://localhost:3001');
});
