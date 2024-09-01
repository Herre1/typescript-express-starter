import { Router } from 'express';
import { commentController } from '../controllers/comment.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';
import { commentValidations } from '@/middlewares/validations.middleware';
import { validate } from '@/middlewares/validate.middleware';


const router = Router();

router.post('/', authMiddleware, commentValidations.create, validate, commentController.createComment);
router.get('/:id', commentController.getComment);
router.put('/:id', authMiddleware, commentValidations.update, validate, commentController.updateComment);
router.delete('/:id', authMiddleware, commentController.deleteComment);
router.get('/', commentController.getAllComments);
router.post('/:id/reply', authMiddleware, commentValidations.create, validate, commentController.replyToComment);

export default router;