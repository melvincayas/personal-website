import LinkContainer from "./LinkContainer";
import navbarClasses from "../../styles/Navbar/Navbar.module.css";

const MobileMenu = props => {
	return (
		<div className={navbarClasses["mobile-menu-container"]}>
			<button
				onClick={props.onClose}
				className={navbarClasses["mobile-close-container"]}
			>
				<i class={`fas fa-times ${navbarClasses["mobile-close-icon"]}`}></i>
			</button>
			<LinkContainer onClose={props.onClose} />
		</div>
	);
};

export default MobileMenu;
