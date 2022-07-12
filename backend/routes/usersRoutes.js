import express from 'express'
import { createUser, getAllUsers } from '../controllers/usersControllers.js';


const router = express.Router();

// GET all users
router.get('/users', getAllUsers)

// GET a single users
// router.get('/:id', )

// POST(Create) a new user
router.post('/', createUser);

// DELETE a user
// router.delete('/:id', )




export default router;

