import { Request, Response } from 'express';
import { userService } from '../services/user.service';

export const userController = {
  async register(req: Request, res: Response) {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ message: 'Error creating user', error });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const token = await userService.login(email, password);
      if (token) {
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error during login', error });
    }
  },

  async getUser(req: Request, res: Response) {
    try {
      const user = await userService.getUserById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error fetching user', error });
    }
  },

  async updateUser(req: Request, res: Response) {
    try {
      const user = await userService.updateUser(req.params.id, req.body);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating user', error });
    }
  },

  async deleteUser(req: Request, res: Response) {
    try {
      const user = await userService.deleteUser(req.params.id);
      if (user) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error deleting user', error });
    }
  },

  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching users', error });
    }
  }
};