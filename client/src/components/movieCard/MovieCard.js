import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { connect } from 'react-redux'
import "./MovieCard.css"

const MovieCard = (props) => {
	const [readMore, setReadMore] = useState(false);

	const IMAGE_URL = "https://image.tmdb.org/t/p/w500"

	const findMovieBasedOnId = (id) => {
		let foundMovie = props.movies.find((movie) => movie.id === id);
		return foundMovie
	}

	const handleAddToFavorite = (id) => {
		let movie = findMovieBasedOnId(id)
		console.log(movie)
		
	}

	return (
		<div className='col-md-3 moviecard'>
			<Card sx={{ maxWidth: 330, minHeight: 440, background: '#1a1d29' }} className='mt-3 p-1 card'>
				<div className='favourite' onClick={() => handleAddToFavorite(props.movieId)}><p className='star text-center'><AiOutlineStar size={30} /></p></div>
				<CardMedia
					component="img"
					height="200"
					image={`${IMAGE_URL}${props.movieData.poster_path}`}
					alt="movie poster"
					className='card-poster'
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div" style={{ color: "#f5f5f5" }}>
						{props.movieData.original_title}
					</Typography>
					<Typography style={{ color: "#f5f5f5" }} variant="body2" color="text.secondary" className='movie-overview'>
						{readMore ? props.movieData.overview : `${props.movieData.overview.substring(0, 140)}...`}
						<button className='readmore-button' onClick={() => setReadMore(!readMore)}>
							{readMore ? "show less" : "show more"}
						</button>
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="medium" style={{ color: "#7f66de" }}>Learn More</Button>
					<div className='imdb-rating'><p className='rating text-center'>{props.movieData.vote_average}</p></div>
				</CardActions>
			</Card>
		</div>

	)
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies.movieList.results,
	}
}

export default connect(mapStateToProps)(MovieCard)