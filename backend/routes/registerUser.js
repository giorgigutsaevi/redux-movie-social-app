import express from 'express'
import { registerUser } from '../controllers/registerUserController.js';


const router = express.Router();

// GET all users

// GET a single users
// router.get('/:id', )

// POST(Create) a new user
router.post('/register', registerUser);

// DELETE a user
// router.delete('/:id', )




export default router;

