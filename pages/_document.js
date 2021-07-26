import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charset="utf-8" />
					<meta name="theme-color" content="#000000" />
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
						integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
						crossorigin="anonymous"
					/>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
					<script defer src="scripts/navbar.js"></script>
				</Head>
				<body className="has-navbar-fixed-top">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
