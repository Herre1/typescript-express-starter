import { Comment, IComment } from '../models/comment.model';

class CommentService {
  async createComment(commentData: Partial<IComment>): Promise<IComment> {
    const comment = new Comment(commentData);
    await comment.save();
    return comment;
  }

  async getCommentById(id: string): Promise<IComment | null> {
    return Comment.findById(id).populate('author', 'username');
  }

  async updateComment(id: string, updateData: Partial<IComment>): Promise<IComment | null> {
    return Comment.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteComment(id: string): Promise<IComment | null> {
    return Comment.findByIdAndDelete(id);
  }

  async getAllComments(): Promise<IComment[]> {
    return Comment.find().populate('author', 'username');
  }

  async replyToComment(parentId: string, replyData: Partial<IComment>): Promise<IComment | null> {
    const reply = new Comment(replyData);
    await reply.save();

    return Comment.findByIdAndUpdate(
      parentId,
      { $push: { replies: reply._id } },
      { new: true }
    );
  }
}

export const commentService = new CommentService();