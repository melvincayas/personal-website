import { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import layoutClasses from "../../styles/UI/Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<main className={`container ${layoutClasses.main}`}>
				{props.children}
			</main>
		</Fragment>
	);
};

export default Layout;
