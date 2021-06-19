import { Fragment } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = props => {
	return (
		<Fragment>
			<Navbar />
			<div className="App container">
				<main class="columns my-6">
					<div className="column is-10 is-offset-1">{props.children}</div>
				</main>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Layout;
