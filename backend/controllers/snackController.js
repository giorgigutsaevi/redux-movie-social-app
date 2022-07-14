import Snack from '../models/snack.js'

export const getSnacks = async(req, res) => {
	const allSnacks = await Snack.find({}).sort({ createdAt: -1 })

	res.status(200).json(allSnacks)
}

export const addSnack = async (req, res) => {
	const { title, category, price } = req.body

	console.log(title, category)

	try {
		// if email already exists, send an error
		const isAvailable = await Snack.findOne({ title: title });
		if (isAvailable) {
			return res.status(400).send("Snack already exists!")
		}

		const newSnack = await Snack.create({
			title: title,
			category: category,
			price: price,
		})

		res.status(200).send(newSnack)

	} catch (error) {
		res.status(400).json({ error: error.message })
	}
}
