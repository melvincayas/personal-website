import { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import layoutClasses from "../../styles/UI/Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<main className={`container ${layoutClasses.main}`}>
				{props.children}
			</main>
			{/* <Footer /> */}
		</Fragment>
	);
};

export default Layout;
