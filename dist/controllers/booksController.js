"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listBooksController = listBooksController;
exports.addBookController = addBookController;
exports.getBookQuestionsController = getBookQuestionsController;
exports.addQuestionController = addQuestionController;
const Book_1 = __importDefault(require("../models/Book"));
const Question_1 = __importDefault(require("../models/Question"));
async function listBooksController(req, res) {
    try {
        const books = await Book_1.default.find({});
        return res.json(books);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro' });
    }
}
async function addBookController(req, res) {
    try {
        const { id, titulo, autor } = req.body;
        if (!id || !titulo)
            return res.status(400).json({ message: 'id e titulo obrigatórios' });
        const existing = await Book_1.default.findById(id);
        if (existing)
            return res.status(409).json({ message: 'livro já existe' });
        const book = await Book_1.default.create({ _id: id, titulo, autor });
        return res.status(201).json(book);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro' });
    }
}
async function getBookQuestionsController(req, res) {
    try {
        const { bookId } = req.params;
        const questions = await Question_1.default.find({ idLivro: bookId });
        return res.json(questions);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro' });
    }
}
async function addQuestionController(req, res) {
    try {
        const { bookId } = req.params;
        const { pergunta, alternativas, correta } = req.body;
        if (!pergunta || !alternativas || typeof correta !== 'number') {
            return res.status(400).json({ message: 'payload inválido' });
        }
        const q = await Question_1.default.create({ idLivro: bookId, pergunta, alternativas, correta });
        return res.status(201).json(q);
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'erro' });
    }
}
