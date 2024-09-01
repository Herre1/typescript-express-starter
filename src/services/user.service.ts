
import { IUser, User } from '@/models/user.model';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';

class UserService {
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    const user = new User(userData);
    await user.save();
    return user;
  }

  async getUserById(id: string): Promise<IUser | null> {
    return User.findById(id);
  }

  async updateUser(id: string, updateData: Partial<IUser>): Promise<IUser | null> {
    return User.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteUser(id: string): Promise<IUser | null> {
    return User.findByIdAndDelete(id);
  }

  async getAllUsers(): Promise<IUser[]> {
    return User.find();
  }

  async login(email: string, password: string): Promise<string | null> {
    const user = await User.findOne({ email });
    if (!user) return null;

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return null;

    const payload: JwtPayload = {
      userId: user._id.toString(),
      role: user.role
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || 'manuel',
      { expiresIn: '1d' }
    );

    return token;
  }
}

export const userService = new UserService();