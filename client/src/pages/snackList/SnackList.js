/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./SnackList.css"
import SnackCard from '../../components/snackCard/SnackCard';
import { createSnackRequest, fetchRequest } from '../../store/snacks/actions'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SnackList = (props) => {

	const notify = () => toast.success("Snack added successfully 🎉", {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	})

	const [snackData, setSnackData] = useState({
		title: '',
		category: '',
		price: 0,
	})

	useEffect(() => {
		props.dispatch(fetchRequest())

	}, [])

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(snackData)
		props.dispatch(createSnackRequest(snackData))
		notify()

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

	// console.log(props?.snacks)
	let snackElements = null;

	if (props?.snacks && props?.snacks.length > 0) {
		snackElements = props?.snacks.map((snack, index) => {
			return (
				<SnackCard key={snack._id} title={snack?.title} category={snack?.category} id={snack._id} />
			)
		})
	}

	return (
		<div className='snacklist'>
			<h3 className='text-center p-3 snacklist-title'>Snack Wishlist</h3>
			<h5 className='text-center w-50 mx-auto'>A good movie is so much better with a good snack. This is a place to gather all your favourite snacks and have a neat little compiled list.</h5>

			<div className='snacklist-container'>


				<form onSubmit={handleSubmit}>

					<ToastContainer />
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

				<div className='snack-list'>
					<div className='container'>
						<div className='row'>
							{snackElements}
						</div>

					</div>

				</div>

			</div>
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