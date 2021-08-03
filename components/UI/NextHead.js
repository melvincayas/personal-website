import { Fragment } from "react";
import Head from "next/head";

const NextHead = props => {
	return (
		<Fragment>
			<Head>
				<meta name="twitter:title" content={props.twitterTitle} />
				<meta name="twitter:description" content={props.description} />
				<meta property="og:url" content={props.metaUrl} />
				<meta property="og:description" content={props.description} />
				<title>{props.title}</title>
			</Head>
			{props.children}
		</Fragment>
	);
};

export default NextHead;
