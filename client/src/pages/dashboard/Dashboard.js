import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchRequest } from '../../store/movies/actions'
import MovieCard from '../../components/movieCard/MovieCard'


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

	return (
		<div className='container'>
			<div className='row'>
				{movies}
			</div>
		</div>
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