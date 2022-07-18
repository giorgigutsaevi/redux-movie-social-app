import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = () => {
	const navigate = useNavigate();


	return (
		<div className='login-form-container'>
			<div className='login-hero me-5'>
				<h1>photo here</h1>
			</div>
			<div className='login-form'>
				<h2>Log in</h2>
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

export default Login;