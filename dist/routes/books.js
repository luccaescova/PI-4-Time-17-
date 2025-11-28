"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = require("../controllers/booksController");
const router = (0, express_1.Router)();
// listar livros
router.get('/', booksController_1.listBooksController);
// criar livro (opcional/admin)
router.post('/', booksController_1.addBookController);
// listar questões de um livro
router.get('/:bookId/questions', booksController_1.getBookQuestionsController);
// adicionar questão a um livro
router.post('/:bookId/questions', booksController_1.addQuestionController);
exports.default = router;
