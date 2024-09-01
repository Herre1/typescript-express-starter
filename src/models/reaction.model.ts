import { model, Schema, Document, Types } from 'mongoose';

export interface IReaction extends Document {
  type: 'like' | 'love' | 'disagree';
  user: Types.ObjectId | string;
  comment: Types.ObjectId | string;
}

const reactionSchema = new Schema({
  type: { type: String, enum: ['like', 'love', 'disagree'], required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: Schema.Types.ObjectId, ref: 'Comment', required: true },
}, { timestamps: true });

export const Reaction = model<IReaction>('Reaction', reactionSchema);