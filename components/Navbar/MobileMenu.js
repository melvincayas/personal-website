import LinkContainer from "./LinkContainer";
import mobileClasses from "../../styles/Navbar/MobileMenu.module.css";

const MobileMenu = props => {
	return (
		<div className={mobileClasses["mobile-menu-container"]}>
			<div className={mobileClasses["mobile-button-container"]}>
				<button
					onClick={props.onClose}
					className={mobileClasses["mobile-close-button"]}
				>
					<i class={`fas fa-times ${mobileClasses["mobile-close-icon"]}`}></i>
				</button>
			</div>
			<LinkContainer onClose={props.onClose} />
		</div>
	);
};

export default MobileMenu;
