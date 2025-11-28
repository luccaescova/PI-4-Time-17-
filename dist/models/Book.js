"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    _id: { type: String }, // allow custom string id
    titulo: { type: String, required: true },
    autor: { type: String }
});
exports.default = (0, mongoose_1.model)('Book', bookSchema);
