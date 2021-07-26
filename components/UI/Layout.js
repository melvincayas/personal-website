import { Fragment } from "react";
import Navbar from "../UI/Navbar";
import Footer from "../UI/Footer";
import layoutClasses from "../../styles/UI/Layout.module.css";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<main className={`container ${layoutClasses.main}`}>
				<div className="columns mt-1">
					<div className="column is-10 is-offset-1">{props.children}</div>
				</div>
			</main>
			{/* <Footer /> */}
		</Fragment>
	);
};

export default Layout;
