"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./routes/auth"));
const books_1 = __importDefault(require("./routes/books"));
const seed_1 = __importDefault(require("./config/seed"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// rotas
app.use('/auth', auth_1.default);
app.use('/books', books_1.default);
// rota raiz
app.get('/', (_, res) => res.json({ ok: true, message: 'Leiturar API (TS)' }));
// seed inicial (não bloqueante) — insere usuário e questões se necessário
(0, seed_1.default)().catch(console.error);
exports.default = app;
