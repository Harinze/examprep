import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  score?: number;
  country?: string;
  scholarship?: boolean;
  certNumber?: string;
  isLoggedIn?: boolean;
  isEmailVerified?: boolean;
  
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email:    { type: String, required: true, unique: true },
  phone:    { type: String, required: false },
  password: { type: String, required: true },
  role:     { type: String, default: 'member' },
  score:    { type: Number, default: 0 },
  country:  { type: String },
  scholarship: { type: Boolean, default: false },
  certNumber:  { type: String },
  isEmailVerified: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
