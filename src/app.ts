import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import reactionRoutes from './routes/reaction.routes';
import commentRoutes from './routes/comment.routes';
import { errorHandler } from './middlewares/errorHandler.middleware';


dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://santiagobelalcazar:VictorEsUnVagazo@icesi-eventos.ieuewou.mongodb.net/?retryWrites=true&w=majority&appName=Icesi-Eventos')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/reactions', reactionRoutes);

// Manejador de errores
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;