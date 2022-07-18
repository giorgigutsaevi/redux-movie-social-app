import React from 'react'
import "./SnackCard.css"
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { connect } from 'react-redux';
import { deleteSnackRequest } from '../../store/snacks/actions';


const SnackCard = (props) => {


	const handleDelete = (id) => {
		console.log("delete clicked! ")
		console.log(id)
		props.dispatch(deleteSnackRequest(id));
	}

	// console.log(props.snacks)

	return (
		<div className="card col-md-2 mt-3 me-3" style={{ width: "15rem" }}>
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					{props.category}
				</p>
				<div>
					<button className="btn btn-warning me-2">
						Edit
						<BiEdit/>
					</button>
					<button className="btn btn-danger" onClick={() => handleDelete(props.id)}>
						Delete
						<BiTrashAlt/>
					</button>
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

export default connect(mapStateToProps)(SnackCard)