import express from 'express';
import RegisterUser from '../controllers/auth.controller.js';

const router = express.Router();
router.route('/register').post(RegisterUser);

export default router;