import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    profilePhotoUrl: { type: String, default: '' },
  },
  { timestamps: true }
);

export const User = model('User', userSchema);
