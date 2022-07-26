/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '../../store/movies/actions'
import MovieCard from '../../components/movieCard/MovieCard'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

import "./Dashboard.css"

const Dashboard = (props) => {
	const [currentPageNum, setCurrentPageNum] = useState(1)

	// console.log(props.movies.results)

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
	movies = props?.movies?.results.map((movie) => {
		return (
			<MovieCard
				key={movie.id}
				movieData={movie}
			/>)
	})

	const handleNextPage = () => {
		setCurrentPageNum(prevState => prevState + 1)
		window.scrollTo(0, 0)
	}

	const handlePrevPage = () => {
		setCurrentPageNum(prevState => prevState - 1);
		window.scrollTo(0, 0)
	}

	return (
		<div className='container-fluid dashboard'>
			<div className='row'>
				<h3 className='text-center mt-5 dashboard-trending'>Trending Now <span><img className='trending-gif' src='/images/star.gif' alt='trending-gif' /></span></h3>
				{movies}
				<div className='text-center mt-5'>
					{<button className='pagination-button me-3' disabled={props.currentPage === 1} onClick={handlePrevPage}><BsChevronLeft /> Previous Page</button>}
					<button disabled={props.currentPage === 100} className='pagination-button' onClick={handleNextPage}>Next Page <BsChevronRight /></button>
				</div>

			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	// console.log(state.movies.movieList)
	return {
		movies: state.movies.movieList,
		isLoading: state.movies.isLoading,
		currentPage: state.movies.currentPage,
	}
}

export default connect(mapStateToProps)(Dashboard)