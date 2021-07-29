import { Fragment } from "react";
import FormProvider from "../components/store/FormProvider";
import Head from "next/head";
import Layout from "../components/UI/Layout";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Fragment>
			<Head>
				<title>Melvin Cayas</title>
			</Head>
			<FormProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</FormProvider>
		</Fragment>
	);
};

export default MyApp;
