import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export async function registerController(req: Request, res: Response) {
  try {
    const { ra, senha, nome } = req.body;
    if (!ra || !senha) return res.status(400).json({ message: 'ra e senha obrigatórios' });

    const existing = await User.findOne({ ra });
    if (existing) return res.status(409).json({ message: 'RA já cadastrado' });

    const hash = await bcrypt.hash(senha, 10);
    const user = await User.create({ ra, senha: hash, nome });
    return res.status(201).json({ ra: user.ra, nome: user.nome });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'erro no servidor' });
  }
}

export async function loginController(req: Request, res: Response) {
  try {
    const { ra, senha } = req.body;
    if (!ra || !senha) return res.status(400).json({ message: 'ra e senha obrigatórios' });

    const user = await User.findOne({ ra });
    if (!user) return res.status(401).json({ message: 'credenciais inválidas' });

    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) return res.status(401).json({ message: 'credenciais inválidas' });

    // gerar token simples JWT (opcional)
    const token = jwt.sign({ ra: user.ra, nome: user.nome }, JWT_SECRET, { expiresIn: '8h' });

    return res.json({ token, user: { ra: user.ra, nome: user.nome } });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'erro no servidor' });
  }
}
