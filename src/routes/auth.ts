import { Router } from 'express';
import { loginController, registerController } from '../controllers/authController';

const router = Router();

// Registrar (opcional, útil para criar alunos)
router.post('/register', registerController);

// Login por RA + senha
router.post('/login', loginController);

export default router;
