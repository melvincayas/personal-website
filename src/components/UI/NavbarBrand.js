import classes from "./styles/Navbar.module.css";

const NavbarBrand = () => {
	return (
		<div className="navbar-brand is-size-5">
			<span className={`navbar-item ${classes.name}`}>Melvin Cayas</span>
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
	);
};

export default NavbarBrand;
