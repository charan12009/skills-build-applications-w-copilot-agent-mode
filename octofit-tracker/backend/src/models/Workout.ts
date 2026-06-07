import { Schema, model, Types } from 'mongoose';

const workoutSchema = new Schema(
  {
    userId: { type: Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true, trim: true },
    difficulty: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
      required: true,
    },
  },
  { timestamps: true }
);

export const Workout = model('Workout', workoutSchema);
