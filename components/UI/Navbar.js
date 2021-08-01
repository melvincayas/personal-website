import { useEffect } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import DesktopLinks from "./DesktopLinks";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const Navbar = () => {
	const windowDimensions = useWindowDimensions();

	return (
		<nav className={navbarClasses.navbar}>
			<div className={navbarClasses["navbar-content-container"]}>
				<div>
					<a href="/">
						<span className={navbarClasses["navbar-name"]}>Melvin Cayas</span>
					</a>
				</div>
				<ul className={navbarClasses["links-container"]}>
					<DesktopLinks />
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
