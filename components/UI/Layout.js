import { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import classes from "../../styles/UI/Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<div className={`App container ${classes.container}`}>
				<main className={`columns mt-1 ${classes.main}`}>
					<div className="column is-10 is-offset-1">{props.children}</div>
				</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
