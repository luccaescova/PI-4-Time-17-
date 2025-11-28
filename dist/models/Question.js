"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    idLivro: { type: String, required: true, index: true },
    pergunta: { type: String, required: true },
    alternativas: { type: [String], required: true },
    correta: { type: Number, required: true }
});
exports.default = (0, mongoose_1.model)('Question', questionSchema);
