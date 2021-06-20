import { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import classes from "./styles/Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<div className={`App container ${classes.container}`}>
				<main class={`columns ${classes.main}`}>
					<div className="column is-10 is-offset-1">{props.children}</div>
				</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
