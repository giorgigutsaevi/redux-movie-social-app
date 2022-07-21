import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ErrorMessage from '../../components/shared/ErrorMessage/ErrorMessage'
import { loginRequest } from '../../store/user/actions'
import { NavLink } from 'react-router-dom'


import "./Login.css"

const Login = (props) => {

	// console.log(props)
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

	const handleLogin = (e) => {
		e.preventDefault();
		try {
			props.dispatch(loginRequest(loginForm, navigate))

			setLoginForm({
				email: "",
				password: "",
			})

		} catch (error) {
			console.log(error)
		}


	}

	return (
		<div className='container-fluid login-form-container'>
			<div className='row align-items-center'>
				<div className='col-md login-hero me-5'>
					
				</div>
				<div className='col-md form-wrapper'>
					{props?.error ? <ErrorMessage text={props.errorMessage} /> : ""}
					<form className='login-form mt-3' onSubmit={handleLogin}>
						<h2 className='text-center p-1 form-title'>MovieNest</h2>
						<h3 className='text-center fw-bold mt-1 form-secondary-title'>Log in</h3>
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
							<button
								type='submit'
								className='register-btn'
								disabled={!loginForm.email || loginForm.password.length < 6}
							>Log in</button>
						</div>
						<div className='mt-5'>
							Don't have an account?
							<div>
								<NavLink to='/accounts/register'><span className='fw-bold'>Sign up</span></NavLink>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.user.user,
		isLoggedIn: state.user.isLoggedIn,
		error: state.user.error,
		errorMessage: state.user.errorMessage,
	}
}

export default connect(mapStateToProps)(Login);