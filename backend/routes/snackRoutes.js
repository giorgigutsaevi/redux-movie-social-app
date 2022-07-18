import express from 'express'
import { addSnack, deleteSnack, getSnacks } from '../controllers/snackController.js';


const router = express.Router();

// GET all snack
router.get('/snacks', getSnacks)

// GET a single snack
// router.get('snacks/:id', )

// POST(Create) a new snack
router.post('/add', addSnack);

// DELETE a snack
router.delete('/snack/:id', deleteSnack)

// UPDATE a snack
// router.put('snacks/:id', )





export default router;

