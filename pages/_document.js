import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<html lang="en-US" />
					<meta charSet="utf-8" />
					<meta name="author" content="Melvin Cayas" />
					<meta
						name="description"
						content="Melvin is a full stack web developer who believes in learning-by-doing and loves creating value through problem-solving. His goal is to impact the world with the code he types!"
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
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@melvincayas" />
					<meta
						name="twitter:image"
						content="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
					/>
					<link
						rel="stylesheet"
						href="https://cdn.jsdelivr.net/npm/bulma@0.9.2/css/bulma.min.css"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
						integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
						crossOrigin="anonymous"
					/>
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Melvin Cayas" />
					<meta
						property="og:image"
						content="https://images.unsplash.com/photo-1564865878688-9a244444042a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
					/>
					<meta
						property="og:image:alt"
						content="A phone with the words Eat, Sleep, Code, Repeat on the screen."
					/>
					<meta property="og:locale" content="en_US" />
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
						rel="stylesheet"
					/>
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
