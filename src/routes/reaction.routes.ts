import { Router } from 'express';
import { reactionController } from '../controllers/reaction.controller';
import { authMiddleware } from '@/middlewares/auth.middleware';
import { reactionValidations } from '@/middlewares/validations.middleware';
import { validate } from '@/middlewares/validate.middleware';


const router = Router();

router.post('/:commentId', authMiddleware, reactionValidations.create, validate, reactionController.createReaction);
router.get('/:commentId', reactionController.getReactionsByComment);
router.delete('/:id', authMiddleware, reactionController.deleteReaction);

export default router;