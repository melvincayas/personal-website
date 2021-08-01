import DesktopLinks from "./DesktopLinks";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const MobileMenu = props => {
	return (
		<div className={navbarClasses["mobile-menu-container"]}>
			<button
				onClick={props.onClose}
				className={navbarClasses["mobile-close-container"]}
			>
				<i class={`fas fa-times ${navbarClasses["mobile-close-icon"]}`}></i>
			</button>
			<DesktopLinks />
		</div>
	);
};

export default MobileMenu;
