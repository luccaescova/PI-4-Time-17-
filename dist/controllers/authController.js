"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerController = registerController;
exports.loginController = loginController;
const User_1 = __importDefault(require("../models/User"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
async function registerController(req, res) {
    try {
        const { ra, senha, nome } = req.body;
        if (!ra || !senha)
            return res.status(400).json({ message: 'ra e senha obrigatórios' });
        const existing = await User_1.default.findOne({ ra });
        if (existing)
            return res.status(409).json({ message: 'RA já cadastrado' });
        const hash = await bcrypt_1.default.hash(senha, 10);
        const user = await User_1.default.create({ ra, senha: hash, nome });
        return res.status(201).json({ ra: user.ra, nome: user.nome });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro no servidor' });
    }
}
async function loginController(req, res) {
    try {
        const { ra, senha } = req.body;
        if (!ra || !senha)
            return res.status(400).json({ message: 'ra e senha obrigatórios' });
        const user = await User_1.default.findOne({ ra });
        if (!user)
            return res.status(401).json({ message: 'credenciais inválidas' });
        const ok = await bcrypt_1.default.compare(senha, user.senha);
        if (!ok)
            return res.status(401).json({ message: 'credenciais inválidas' });
        // gerar token simples JWT (opcional)
        const token = jsonwebtoken_1.default.sign({ ra: user.ra, nome: user.nome }, JWT_SECRET, { expiresIn: '8h' });
        return res.json({ token, user: { ra: user.ra, nome: user.nome } });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro no servidor' });
    }
}
