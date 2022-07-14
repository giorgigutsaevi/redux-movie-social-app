import React, { useState } from 'react'
import {connect} from 'react-redux'
import "./SnackList.css"
import { createSnackRequest } from '../../store/snacks/actions'

const SnackList = (props) => {

	const [snackData, setSnackData] = useState({
		title: '',
		category: '',
		price: 0,
	})

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(snackData)
		props.dispatch(createSnackRequest(snackData))
	
		setSnackData({
			title: '',
			category: '',
			price: 0,
		})
	}

	const handleChange = (e) => {
		const { value, name } = e.target;
		setSnackData(prevState => {
			return {
				...prevState,
				[name]: value
			}
		})
	}

	return (
		<div className='snacklist'>
			<form onSubmit={handleSubmit}>
				<h3 className='text-center p-3 snacklist-title'>Snack Wishlist</h3>
				<div className='snacklist-form'>
					<h5 className='snacklist-form-title'>Add a snack:</h5>
					<label className='mt-2'>Candy</label>
					<input
						className="form-control mt-1 mb-2"
						type="text"
						aria-label="default input example"
						onChange={handleChange}
						name='title'
						value={snackData.title}
					/>
					<label>Category</label>
					<input
						className="form-control mb-2"
						type="text"
						aria-label="default input example"
						onChange={handleChange}
						name='category'
						value={snackData.category}
					/>
					<label>Price</label>
					<input
						className="form-control"
						type="text"
						aria-label="default input example"
						onChange={handleChange}
						name='price'
						value={snackData.price}
					/>

					<button className='mt-2 form-btn' type='submit'>Add</button>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		snacks: state.snacks.snackList,
		isLoading: state.snacks.isLoading,
	}
}

export default connect(mapStateToProps)(SnackList)