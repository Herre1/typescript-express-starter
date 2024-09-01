import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes';
import reactionRoutes from './routes/reaction.routes';
import commentRoutes from './routes/comment.routes';
import { errorHandler } from './middlewares/errorHandler.middleware';

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mahupa25:6kfZ3biiVNVnr0MH@cluster0.xb2gvt9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {

})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
     // Detener el proceso si falla la conexión
  });

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
