import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '../../store/movies/actions'


const Dashboard = (props) => {

	useEffect(() => {
		props.dispatch(fetchRequest())
	}, [])

	if (props.isLoading) {
		return (
			<div className="spinner-border text-success" role="status">
				<span className="sr-only"></span>
			</div>
		)
	}

	return (
		<div>Dashboard</div>
	)
}

const mapStateToProps = (state) => {
	// console.log(state.movies.movieList)
	return {
		movies: state.movies.movieList,
		isLoading: state.movies.isLoading,
	}
}

export default connect(mapStateToProps)(Dashboard)