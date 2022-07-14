import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">
					Movier
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link active" aria-current="page" to="/candystore">
								Snack List
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="#">
								Favorites
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="#">
								Your WatchLists
							</NavLink>
						</li>
					</ul>
					<form className="d-flex me-5" role="search">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					<ul className="navbar-nav mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" to="#">
								Login
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="#">
								Logout
							</NavLink>
						</li>
					</ul>
					
				</div>
			</div>
		</nav>

	)
}

export default Navbar;