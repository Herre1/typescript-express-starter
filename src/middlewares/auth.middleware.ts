import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  userId: string;
  role: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'manuel');
    
    // Verificar si decoded es un objeto y tiene las propiedades necesarias
    if (typeof decoded === 'object' && 'userId' in decoded && 'role' in decoded) {
      req.user = {
        userId: decoded.userId as string,
        role: decoded.role as string
      };
      next();
    } else {
      throw new Error('Invalid token payload');
    }
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};