import { Request, Response } from 'express';
import { commentService } from '../services/comment.service';

export const commentController = {
  async createComment(req: Request, res: Response) {
    try {
      const comment = await commentService.createComment({
        ...req.body,
        author: req.user.userId
      });
      res.status(201).json(comment);
    } catch (error) {
      res.status(400).json({ message: 'Error creating comment', error });
    }
  },

  async getComment(req: Request, res: Response) {
    try {
      const comment = await commentService.getCommentById(req.params.id);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error fetching comment', error });
    }
  },

  async updateComment(req: Request, res: Response) {
    try {
      const comment = await commentService.updateComment(req.params.id, req.body);
      if (comment) {
        res.json(comment);
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error updating comment', error });
    }
  },

  async deleteComment(req: Request, res: Response) {
    try {
      const comment = await commentService.deleteComment(req.params.id);
      if (comment) {
        res.json({ message: 'Comment deleted successfully' });
      } else {
        res.status(404).json({ message: 'Comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error deleting comment', error });
    }
  },

  async getAllComments(req: Request, res: Response) {
    try {
      const comments = await commentService.getAllComments();
      res.json(comments);
    } catch (error) {
      res.status(400).json({ message: 'Error fetching comments', error });
    }
  },

  async replyToComment(req: Request, res: Response) {
    try {
      const reply = await commentService.replyToComment(req.params.id, {
        ...req.body,
        author: req.user.userId,
        parentComment: req.params.id
      });
      if (reply) {
        res.status(201).json(reply);
      } else {
        res.status(404).json({ message: 'Parent comment not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Error replying to comment', error });
    }
  }
};