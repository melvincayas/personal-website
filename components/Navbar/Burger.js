import { useState } from "react";
import MobileMenu from "./MobileMenu";
import navbarClasses from "../../styles/Navbar/Navbar.module.css";

const Burger = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuToggleHandler = () => {
		setIsMobileMenuOpen(prevState => !prevState);
	};

	if (isMobileMenuOpen) return <MobileMenu onClose={menuToggleHandler} />;

	return (
		<button
			onClick={menuToggleHandler}
			className={navbarClasses["burger-container"]}
		>
			<i class={`fas fa-bars ${navbarClasses["burger-icon"]}`}></i>
		</button>
	);
};

export default Burger;
