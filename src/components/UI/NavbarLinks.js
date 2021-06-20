import { NavLink } from "react-router-dom";
import classes from "./styles/Navbar.module.css";

const NavbarLinks = () => {
	return (
		<div className="navbar-menu" id="nav-links">
			<div className="navbar-end">
				<div className="navbar-item">
					<NavLink
						exact
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						to="/"
					>
						Home
					</NavLink>
				</div>
				<div className="navbar-item">
					<NavLink
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						to="/projects"
					>
						Projects
					</NavLink>
				</div>
				<div className="navbar-item">
					<NavLink
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						to="/resume"
					>
						Resume
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default NavbarLinks;
