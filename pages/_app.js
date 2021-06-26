import { Fragment } from "react";
import Head from "next/head";
import Layout from "../components/UI/Layout";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<title>Melvin Cayas</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Fragment>
	);
};

export default MyApp;
