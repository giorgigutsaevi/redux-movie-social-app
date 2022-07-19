import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import "./Signup.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserRequest } from '../../store/user/actions'


const Signup = (props) => {
	const navigate = useNavigate();

	// console.log(props.user)

	const notify = () => toast.success("Succesful Registration 🎉", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

	const [userForm, setUserForm] = useState({
		username: "",
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserForm(prevState => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			props.dispatch(createUserRequest(userForm))
			notify()
		} catch (error) {
			console.log(error)
		}

		setUserForm({
			username: "",
			email: "",
			password: "",
		})

		navigate("/")
	}

	return (
		<div className='signup-form-container'>
			<ToastContainer />
			<div className='sign-up-hero me-5'>
				<h1>photo here</h1>
			</div>
			<form className='signup-form' onSubmit={handleSubmit}>
				<h2>Sign up</h2>
				<label className='mt-3 p-1'>
					Username
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Username"
					aria-label="default input example"
					onChange={handleChange}
					name="username"
					value={userForm.username}
				/>
				<label className='mt-3 p-1'>
					Email
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Email"
					aria-label=".form-control-sm example"
					onChange={handleChange}
					name='email'
					value={userForm.email}
				/>
				<label className='mt-3 p-1'>
					Password
				</label>
				<input
					className="form-control mt-2"
					type="password"
					placeholder="Enter Password"
					aria-label=".form-control-sm example"
					onChange={handleChange}
					name='password'
					value={userForm.password}
				/>
				<div className='button-container'>
					<button className='register-btn'>Register</button>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user
	}
}

export default connect(mapStateToProps)(Signup)