import Head from "next/head";

const NextHead = props => {
	return (
		<Head>
			<meta name="twitter:title" content={props.twitterTitle} />
			<meta name="twitter:description" content={props.description} />
			<meta property="og:url" content={props.metaUrl} />
			<meta property="og:description" content={props.description} />
			<title>{props.title}</title>
		</Head>
	);
};

export default NextHead;
