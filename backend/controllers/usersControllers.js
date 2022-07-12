
export const getAllUsers = async (req, res) => {
	res.status(200).json({msg: "Here are ALL the users!"})
}

export const createUser = async (req, res) => {
	res.status(200).json({msg: 'USER CREATED!'})
}