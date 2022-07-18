import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		lowercase: true,
		min: 6,
		trim: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
		min: 6,
	},
	profilePic: {
		type: String,
		default: "/images/profile.png"
	}


}, { timestamps: true })

export default mongoose.model("user", userSchema)