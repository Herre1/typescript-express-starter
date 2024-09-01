import { Request, Response } from 'express';
import { reactionService } from '../services/reaction.service';

export const reactionController = {
  async createReaction(req: Request, res: Response) {
    try {
      const existingReaction = await reactionService.getUserReactionOnComment(req.user!.userId, req.params.commentId);
      if (existingReaction) {
        return res.status(400).json({ message: 'User has already reacted to this comment' });
      }

      const reaction = await reactionService.createReaction({
        type: req.body.type,
        user: req.user!.userId,
        comment: req.params.commentId
      });
      res.status(201).json(reaction);
    } catch (error) {
      res.status(400).json({ message: 'Error creating reaction', error });
    }
  },

  async getReactionsByComment(req: Request, res: Response) {
    try {
      const reactions = await reactionService.getReactionsByComment(req.params.commentId);
      res.json(reactions);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching reactions', error });
    }
  },

  async deleteReaction(req: Request, res: Response) {
    try {
      const reaction = await reactionService.deleteReaction(req.params.id);
      if (reaction) {
        res.json({ message: 'Reaction deleted successfully' });
      } else {
        res.status(404).json({ message: 'Reaction not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error deleting reaction', error });
    }
  }
};