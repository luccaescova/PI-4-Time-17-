import { Schema, model } from 'mongoose';

export interface IBook {
  _id?: string; // we'll use string ids like 'magico_oz'
  titulo: string;
  autor?: string;
}

const bookSchema = new Schema<IBook>({
  _id: { type: String }, // allow custom string id
  titulo: { type: String, required: true },
  autor: { type: String }
});

export default model<IBook>('Book', bookSchema);
