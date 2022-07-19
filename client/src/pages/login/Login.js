import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/shared/ErrorMessage/ErrorMessage'
import { loginRequest } from '../../store/user/actions'

import "./Login.css"

const Login = (props) => {
	const navigate = useNavigate();

	const [loginForm, setLoginForm] = useState({
		email: "",
		password: "",
	})

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginForm(prevState => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		props.dispatch(loginRequest(loginForm))
		setLoginForm({
			email: "",
			password: "",
		})

		// console.log(props.error)
		props.error && navigate('/')
	}

	return (
		<div className='login-form-container'>
			<div className='login-hero me-5'>
				<h1>photo here</h1>
			</div>
			<div className='form-wrapper'>
			{props?.error ? <ErrorMessage text={props.errorMessage}/> : ""}
			<form className='login-form' onSubmit={handleLogin}>
				<h2>Log in</h2>
				<label className='mt-3 p-1'>
					Email
				</label>
				<input
					className="form-control mt-2"
					type="text"
					placeholder="Enter Email"
					aria-label=".form-control-sm example"
					onChange={handleChange}
					name="email"
					value={loginForm.email}
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
					name="password"
					value={loginForm.password}
				/>
				<div className='button-container'>
					<button className='register-btn'>Log in</button>
				</div>
			</form>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	// console.log("STATE", state)
	return {
		user: state.user.user,
		isLoggedIn: state.user.isLoggedIn,
		error: state.user.error,
		errorMessage: state.user.errorMessage,
	}
}

export default connect(mapStateToProps)(Login);