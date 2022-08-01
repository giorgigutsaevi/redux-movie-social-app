import User from "../models/user.js"
import mongoose from "mongoose"

// Get a single user
export const getUser = async (req, res) => {
	const { id } = req.params

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ errorMessage: "No such user found!" })
	}
	const user = await User.findById(id);

	if(!user){
		return res.status(404).json({ errorMessage: "No such user found!" })
	}

	console.log(user)

	res.status(200).json(user)
}

