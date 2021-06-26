import Link from "next/link";
import classes from "./styles/Navbar.module.css";

const NavbarLinks = () => {
	return (
		<div className="navbar-menu" id="nav-links">
			<div className="navbar-end">
				<div className="navbar-item">
					<Link exact className={`is-size-5 ${classes["nav-links"]}`} href="/">
						<a className={`is-size-5 ${classes["nav-links"]}`}>Home</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link
						className={`is-size-5 ${classes["nav-links"]}`}
						href="/projects"
					>
						<a className={`is-size-5 ${classes["nav-links"]}`}>Projects</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link className={`is-size-5 ${classes["nav-links"]}`} href="/resume">
						<a className={`is-size-5 ${classes["nav-links"]}`}>Resume</a>
					</Link>
				</div>
				<div className="navbar-item">
					<Link className={`is-size-5 ${classes["nav-links"]}`} href="/contact">
						<a className={`is-size-5 ${classes["nav-links"]}`}>Contact</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavbarLinks;
