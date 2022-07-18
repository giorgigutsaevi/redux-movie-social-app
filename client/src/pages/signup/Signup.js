import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Signup.css"

const Signup = () => {
	const navigate = useNavigate();

	return (
		<div className='signup-form-container'>
			<div className='sign-up-hero me-5'>
				<h1>photo here</h1>
			</div>
			<div className='signup-form'>
				<h2>Sign up</h2>
				<label className='mt-3 p-1'>
					Username
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Username"
					aria-label="default input example"
				/>
				<label className='mt-3 p-1'>
					Email
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Email"
					aria-label=".form-control-sm example"
				/>
				<label className='mt-3 p-1'>
					Password
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Password"
					aria-label=".form-control-sm example"
				/>
				<div className='button-container'>
					<button className='register-btn'>Register</button>
				</div>
			</div>
		</div>
	)
}

export default Signup