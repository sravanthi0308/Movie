import { Router } from 'express';
import express from 'express';
// const router = Router();
const router = express.Router();
import { registerUser, loginUser } from '../Controllers/authController.js';

 router.post('/register',registerUser);
 router.get('/login',loginUser);


//  module.exports = router;
export default router;