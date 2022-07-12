import User from "../models/user.js"
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res) => {
	// res.status(200).json({msg: 'USER CREATED!'})
	const { username, email, password } = req.body;

	try {
		// if email already exists, send an error
		const isRegistered = await User.findOne({ email: email });
		if (isRegistered) {
			return res.status(400).send("Email already exists")
		}

		// Hashing passwords
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = await User.create({
			username: username,
			email: email,
			password: hashedPassword,
		})

		res.status(200).send(newUser)

	} catch (error) {
		res.status(400).json({error: error.message})
	}
}