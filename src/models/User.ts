import { Schema, model } from 'mongoose';

export interface IUser {
  ra: string;
  nome?: string;
  senha: string; // hash
}

const userSchema = new Schema<IUser>({
  ra: { type: String, required: true, unique: true },
  nome: { type: String },
  senha: { type: String, required: true }
}, { timestamps: true });

export default model<IUser>('User', userSchema);
