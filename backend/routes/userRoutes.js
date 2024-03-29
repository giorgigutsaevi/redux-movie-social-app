import express from 'express'
import { isAuthenticated, loginUser, logoutUser } from '../controllers/authUserController.js';
import { registerUser } from '../controllers/registerUserController.js';
import { getUser } from '../controllers/userController.js';


const router = express.Router();

// GET all users

// GET a single users
router.get('/user/:id', getUser)

// POST(Create) a new user
router.post('/register', registerUser);

// DELETE a user
// router.delete('/:id', )

// LOGIN USER ROUTE
router.post('/login', loginUser);

// LOGOUT USER ROUTE
router.get('/logout', logoutUser);

// VerifyToken Route
router.get("/authenticated", isAuthenticated)

// Add a movieToFavorites
// router.post("/add-movie/:id", )

export default router;

