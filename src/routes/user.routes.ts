import { Router } from 'express';
import { userController } from '../controllers/user.controller';
import { userValidations } from '@/middlewares/validations.middleware';
import { authMiddleware } from '@/middlewares/auth.middleware';
import { validate } from '@/middlewares/validate.middleware';




const router = Router();

router.post('/register', userValidations.create, validate, userController.register);
router.post('/login', userValidations.login, validate, userController.login);
router.get('/:id', authMiddleware, userController.getUser);
router.put('/:id', authMiddleware, userValidations.create, validate, userController.updateUser);
router.delete('/:id', authMiddleware, userController.deleteUser);
router.get('/', authMiddleware, userController.getAllUsers);

export default router;