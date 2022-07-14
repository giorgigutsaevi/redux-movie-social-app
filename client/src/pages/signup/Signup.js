import React from 'react'
import "./Signup.css"

const Signup = () => {
	return (
		<div className='signup-form-container'>
			<div className='sign-up-hero me-5'>
				<h1>photo here</h1>
			</div>
			<div className='signup-form'>
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
			</div>
		</div>
	)
}

export default Signup