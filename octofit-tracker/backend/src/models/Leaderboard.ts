import { Schema, model, Types } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, min: 0, default: 0 },
    rank: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);

export const Leaderboard = model('Leaderboard', leaderboardSchema);
