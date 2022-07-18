import express from 'express'
import { loginUser, logoutUser } from '../controllers/authUserController.js';
import { registerUser } from '../controllers/registerUserController.js';


const router = express.Router();

// GET all users
// router.get("users", )

// GET a single users
// router.get('/:id', )

// POST(Create) a new user
router.post('/register', registerUser);

// DELETE a user
// router.delete('/:id', )

// LOGIN USER ROUTE
router.post('/login', loginUser);

// LOGOUT USER ROUTE
router.get('/logout', logoutUser);

export default router;

