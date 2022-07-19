import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MovieCard.css"

const MovieCard = (props) => {

	// console.log(props.movieData)

	const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
	return (
		<div className='col-md-3'>
			<Card sx={{ maxWidth: 350, minHeight: 450, background: '#191A19' }} className='mt-3 p-1 card'>
				<CardMedia
					component="img"
					height="350"
					image={`${IMAGE_URL}${props.movieData.poster_path}`}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div" style={{color: "#f5f5f5"}}>
						{props.movieData.original_title}
					</Typography>
					<Typography style={{color: "#f5f5f5"}} variant="body2" color="text.secondary">
						{props.movieData.overview}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size="medium">Learn More</Button>
					<div className='imdb-rating'><p className='rating text-center'>{props.movieData.vote_average}</p></div>
				</CardActions>
			</Card>
		</div>

	)
}

export default MovieCard