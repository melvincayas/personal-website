import Layout from "../components/UI/Layout";
import "bulma/css/bulma.min.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
};

export default MyApp;
