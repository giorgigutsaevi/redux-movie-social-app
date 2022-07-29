/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./SnackList.css"
import SnackCard from '../../components/snackCard/SnackCard';
import { createSnackRequest, fetchRequest } from '../../store/snacks/actions'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SnackModal from '../../components/snackModal.js/SnackModal';


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
			<h3 className='text-center snacklist-title p-3'>Snack Wishlist</h3>
			<h5 className='text-center snacklist-sub-title'>A good movie is so much better with a good snack. This is a place to gather all your favourite snacks and have a neat little compiled list.</h5>
			<h6 className='text-center snacklist-text p-2'>All your favorite snacks in one, consolidated place.</h6>
			<div className='text-center'>
				<button
					type="button"
					className="btn btn-primary modal-btn"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal"
				>
					Add a snack
				</button>
			</div>
			<SnackModal
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				snackData={snackData}
			/>
			<ToastContainer />
			<div className='snacklist-container p-4'>
				
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