import useWindowDimensions from "../hooks/useWindowDimensions";
import LinkContainer from "./LinkContainer";
import Burger from "./Burger";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const Navbar = () => {
	const windowDimensions = useWindowDimensions();

	const navbarLinks =
		windowDimensions.width < 1024 ? <Burger /> : <LinkContainer />;

	return (
		<nav className={navbarClasses.navbar}>
			<div className={navbarClasses["navbar-content-container"]}>
				<div>
					<a href="/">
						<span className={navbarClasses["navbar-name"]}>Melvin Cayas</span>
					</a>
				</div>
				{navbarLinks}
			</div>
		</nav>
	);
};

export default Navbar;
