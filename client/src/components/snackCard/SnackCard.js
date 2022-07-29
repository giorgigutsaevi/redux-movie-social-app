import React from 'react'
import "./SnackCard.css"
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { connect } from 'react-redux';
import { deleteSnackRequest } from '../../store/snacks/actions';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SnackCard = (props) => {


	const handleDelete = (id) => {
		console.log("delete clicked! ")
		console.log(id)
		props.dispatch(deleteSnackRequest(id));
	}

	return (

		<Card sx={{ maxWidth: 250,  background: '#1a1d29' }} className='col-md mt-3 me-4 snackcard'>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" style={{ color: "#6b3ec2" }}>
					{props.title}
				</Typography>
				<Typography variant="body" color="text.secondary" style={{ color: "#f5f5f5" }}>
					{props.category}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Edit</Button>
				<Button size="small" onClick={() => handleDelete(props.id)}>Delete</Button>
			</CardActions>
		</Card>

		// <div className="card col-md-2 me-4 ms-4 mt-3 snackcard" style={{ width: "20rem", height: "10rem" }}>
		// 	<div className="card-body">
		// 		<h5 className="card-title">{props.title}</h5>
		// 		<p className="card-text">
		// 			{props.category}
		// 		</p>
		// 		<div className='mt-2'>
		// 			<button className="btn btn-warning me-2">
		// 				Edit
		// 				<BiEdit/>
		// 			</button>
		// 			<button className="btn btn-danger" onClick={() => handleDelete(props.id)}>
		// 				Delete
		// 				<BiTrashAlt/>
		// 			</button>
		// 		</div>
		// 	</div>
		// </div>

	)
}

const mapStateToProps = (state) => {
	return {
		snacks: state.snacks.snackList,
		isLoading: state.snacks.isLoading,
	}
}

export default connect(mapStateToProps)(SnackCard)