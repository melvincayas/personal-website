import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import FormProvider from "../components/store/FormProvider";
import Layout from "../components/UI/Layout";
import LoadingScreen from "../components/UI/LoadingScreen";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }) => {
	const [isPageLoading, setIsPageLoading] = useState(false);
	const router = useRouter();

	useEffect(() => {
		const startPageLoad = () => setIsPageLoading(true);

		const endPageLoad = () => setIsPageLoading(false);

		router.events.on("routeChangeStart", startPageLoad);
		router.events.on("routeChangeComplete", endPageLoad);
		router.events.on("routeChangeError", endPageLoad);

		return () => {
			router.events.off("routeChangeStart", startPageLoad);
			router.events.off("routeChangeComplete", endPageLoad);
			router.events.off("routeChangeError", endPageLoad);
		};
	}, [router.events]);

	return (
		<Fragment>
			<Head>
				<title>Melvin Cayas</title>
			</Head>
			<FormProvider>
				<Layout>
					{isPageLoading ? <LoadingScreen /> : <Component {...pageProps} />}
				</Layout>
			</FormProvider>
		</Fragment>
	);
};

export default MyApp;
