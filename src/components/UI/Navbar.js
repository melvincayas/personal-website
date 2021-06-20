import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
	return (
		<nav
			className="navbar is-fixed-top"
			role="navigation"
			aria-label="main navigation"
		>
			<NavbarBrand />
			<NavbarLinks />
		</nav>
	);
};

export default Navbar;
