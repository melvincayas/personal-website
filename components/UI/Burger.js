import { useState } from "react";
import navbarClasses from "../../styles/UI/Navbar.module.css";

const Burger = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const menuToggleHandler = () => {
		setIsMobileMenuOpen(prevState => !prevState);
	};

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
