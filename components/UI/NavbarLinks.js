import Link from "next/link";
import classes from "./styles/Navbar.module.css";

const NavbarLinks = () => {
	return (
		<div className="navbar-menu" id="nav-links">
			<div className="navbar-end">
				<div className="navbar-item">
					<Link
						exact
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						href="/"
					>
						Home
					</Link>
				</div>
				<div className="navbar-item">
					<Link
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						href="/projects"
					>
						Projects
					</Link>
				</div>
				<div className="navbar-item">
					<Link
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						href="/resume"
					>
						Resume
					</Link>
				</div>
				<div className="navbar-item">
					<Link
						className={`is-size-5 ${classes["nav-links"]}`}
						activeClassName={classes.active}
						href="/contact"
					>
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarLinks;
