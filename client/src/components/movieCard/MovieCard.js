import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MovieCard.css"

const MovieCard = (props) => {
	const [readMore, setReadMore] = useState(false);

	const IMAGE_URL = "https://image.tmdb.org/t/p/w500"
	return (
		<div className='col-md-3 moviecard'>
			<Card sx={{ maxWidth: 350, minHeight: 450, background: '#17000c' }} className='mt-3 p-1 card'>
				<CardMedia
					component="img"
					height="330"
					image={`${IMAGE_URL}${props.movieData.poster_path}`}
					alt="movie poster"
				/>
				<CardContent>
					<Typography gutterBottom variant="h6" component="div" style={{ color: "#f5f5f5" }}>
						{props.movieData.original_title}
					</Typography>
					<Typography style={{ color: "#f5f5f5" }} variant="body2" color="text.secondary">
						{readMore ? props.movieData.overview : `${props.movieData.overview.substring(0, 140)}...`}
						<button className='readmore-button' onClick={() => setReadMore(!readMore)}>
							{readMore ? "show less" : "show more"}
						</button>
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