import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charset="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta name="author" content="Melvin Cayas" />
					<meta
						name="description"
						content="Melvin Cayas is a full stack web developer who believes in learning-by-doing and loves creating value through problem-solving. His goal is to impact the world with the code I type."
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/favicon-16x16.png"
					/>
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2b95f0" />
					<meta name="msapplication-TileColor" content="#2b95f0" />
					<meta name="theme-color" content="#2b95f0" />
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
					<script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
