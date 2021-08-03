import useWindowDimensions from "../hooks/useWindowDimensions";
import LinkContainer from "./LinkContainer";
import Link from "next/link";
import Burger from "./Burger";
import navbarClasses from "../../styles/Navbar/Navbar.module.css";

const Navbar = () => {
	const windowDimensions = useWindowDimensions();

	const navbarLinks =
		windowDimensions.width < 1024 ? <Burger /> : <LinkContainer />;

	return (
		<nav className={navbarClasses.navbar}>
			<div className={navbarClasses["navbar-content-container"]}>
				<div>
					<Link href="/" passHref>
						<a className={navbarClasses["navbar-name"]}>Melvin Cayas</a>
					</Link>
				</div>
				{navbarLinks}
			</div>
		</nav>
	);
};

export default Navbar;
