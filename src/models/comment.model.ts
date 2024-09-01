import { model, Schema, Document } from 'mongoose';

export interface IComment extends Document {
  content: string;
  author: Schema.Types.ObjectId;
  parentComment?: Schema.Types.ObjectId;
  replies: Schema.Types.ObjectId[];
}

const commentSchema = new Schema({
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  parentComment: { type: Schema.Types.ObjectId, ref: 'Comment' },
  replies: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

export const Comment = model<IComment>('Comment', commentSchema);