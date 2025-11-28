"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../controllers/authController");
const router = (0, express_1.Router)();
// Registrar (opcional, útil para criar alunos)
router.post('/register', authController_1.registerController);
// Login por RA + senha
router.post('/login', authController_1.loginController);
exports.default = router;
