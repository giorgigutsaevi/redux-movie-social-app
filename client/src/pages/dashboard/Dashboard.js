/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '../../store/movies/actions'
import MovieCard from '../../components/movieCard/MovieCard'
import DashboardPagination from '../../components/pagination/DashboardPagination';
import "./Dashboard.css"

const Dashboard = (props) => {
	const [currentPageNum, setCurrentPageNum] = useState(props.currentPage)

	useEffect(() => {
		props.dispatch(fetchRequest(currentPageNum))
	}, [currentPageNum])

	if (props.isLoading) {
		return (
			<div className='spinner-container'>
				<div className="spinner-border text-warning my-spinner" role="status">
					<span className="sr-only"></span>
				</div>
			</div>
		)
	}

	if (props.movies.length === 0) {
		return (
			<div className="alert alert-danger" role="alert">
				A simple danger alert—check it out!
			</div>
		)
	}

	// console.log(props.movies.results)

	let movies = null;
	movies = props?.movies?.results?.map((movie) => {
		return (
			<MovieCard
				key={movie.id}
				movieData={movie}
			/>)
	})

	return (
		<div className='container-fluid dashboard'>
			<div className='row'>
				<h3 className='text-center dashboard-trending'>Trending Now</h3>
				{movies}
				<DashboardPagination
					setCurrentPageNum={setCurrentPageNum}
					currentPageNum={currentPageNum}
				/>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies.movieList,
		isLoading: state.movies.isLoading,
		currentPage: state.movies.currentPage,
		numOfPages: state.movies.numOfPages
	}
}

export default connect(mapStateToProps)(Dashboard)