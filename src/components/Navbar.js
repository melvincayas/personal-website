import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav
			className="navbar is-dark is-fixed-top"
			role="navigation"
			aria-label="main navigation"
		>
			<div className="navbar-brand has-text-white is-size-5">
				<span className="navbar-item">Melvin Cayas</span>
				<a
					role="button"
					className="navbar-burger"
					id="burger"
					aria-label="menu"
					aria-expanded="false"
					data-target="nav-links"
				>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			</div>

			<div className="navbar-menu" id="nav-links">
				<div className="navbar-end">
					<div className="navbar-item">
						<NavLink
							exact
							className="is-size-5"
							activeClassName={classes.active}
							to="/"
						>
							Home
						</NavLink>
					</div>
					<div className="navbar-item">
						<NavLink
							className="is-size-5"
							activeClassName={classes.active}
							to="/projects"
						>
							Projects
						</NavLink>
					</div>
					<div className="navbar-item">
						<NavLink
							className="is-size-5"
							activeClassName={classes.active}
							to="/resume"
						>
							Resume
						</NavLink>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
