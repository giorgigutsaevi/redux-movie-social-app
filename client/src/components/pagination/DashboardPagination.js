import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack';
import { connect } from 'react-redux'
import Typography from '@mui/material/Typography';
import React from 'react'
import "./DashboardPagination.css"

const DashboardPagination = (props) => {

	const handleChange = (page) => {
		props.setCurrentPageNum(page)
		window.scroll(0, 0)
	}

	return (
		<div>
			<Stack spacing={2}>
				<Typography className='text-center mt-3 page-indicator'>Page: {props.currentPage}</Typography>
				<Pagination
					showFirstButton
					showLastButton
					className='dashboard-pagination'
					count={Math.ceil(props.numOfPages / 80)}
					page={props.currentPage}
					variant="outlined"
					color="primary"
					size="large"
					onChange={(e, value) => handleChange(value)}
					sx={
						{ button: { color: '#f2f4fa' }, div: { color: '#f2f4fa' } }
					}

				/>
			</Stack>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.movies.isLoading,
		currentPage: state.movies.currentPage,
		numOfPages: state.movies.numOfPages
	}
}


export default connect(mapStateToProps)(DashboardPagination)