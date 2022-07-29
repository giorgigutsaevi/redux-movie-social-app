import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import "./Signup.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserRequest } from '../../store/user/actions'


const Signup = (props) => {
	const navigate = useNavigate();
	const [userForm, setUserForm] = useState({
		username: "",
		email: "",
		password: "",
	})

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


	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserForm(prevState => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const handleSubmit = (e) => {

		try {
			e.preventDefault();
			props.dispatch(createUserRequest(userForm, navigate))
			// notify()
			setUserForm({
				username: "",
				email: "",
				password: "",
			})
		} catch (error) {
			console.log("ERROR ->", error)
		}

	}

	return (
		<div className='container-fluid signup-form-container'>
			<ToastContainer />
			<div className='row align-items-center'>
				<div className='col-md sign-up-hero me-5'>
				</div>
				<form className='col-md signup-form mt-2' onSubmit={handleSubmit}>
					<h2 className='text-center p-1 signup-form-title'>MovieNest</h2>
					<h3 className='text-center fw-bold mt-1 signup-form-secondary-title'>Sign up</h3>
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
						<button
							className='register-btn'
							disabled={!userForm.email || !userForm.username || userForm.password.length < 6}
						>Register</button>
					</div>

					<div className='mt-5 log-in-msg text-center'>
						Have an account?
						<div>
							<NavLink className='log-in-msg-link' to='/accounts/login'><span className='log-in-msg-btn fw-bold'>Log in</span></NavLink>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user
	}
}

export default connect(mapStateToProps)(Signup)