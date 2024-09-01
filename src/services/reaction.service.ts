import { Types } from 'mongoose';
import { Reaction, IReaction } from '../models/reaction.model';

class ReactionService {
    async createReaction(reactionData: Partial<IReaction>): Promise<IReaction> {
      const reaction = new Reaction({
        ...reactionData,
        user: new Types.ObjectId(reactionData.user as string),
        comment: new Types.ObjectId(reactionData.comment as string)
      });
      await reaction.save();
      return reaction;
    }

  async getReactionsByComment(commentId: string): Promise<IReaction[]> {
    return Reaction.find({ comment: commentId }).populate('user', 'username');
  }

  async deleteReaction(id: string): Promise<IReaction | null> {
    return Reaction.findByIdAndDelete(id);
  }

  async getUserReactionOnComment(userId: string, commentId: string): Promise<IReaction | null> {
    return Reaction.findOne({
      user: new Types.ObjectId(userId),
      comment: new Types.ObjectId(commentId)
    });
  }
}
export const reactionService = new ReactionService();