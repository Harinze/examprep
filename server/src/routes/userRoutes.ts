// routes/userRoutes.ts
import { Router } from 'express';
import { createUser, loginUser, getAllUsers } from '../controllers/userController';

const router = Router();

router.post('/register', createUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

export default router;
