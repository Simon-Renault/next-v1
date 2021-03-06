import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render(): JSX.Element {
		return (
			<Html lang="en" className="no-fouc">
				<Head>
					<link rel="shortcut icon" href="/static/favicon.jpg" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<script> </script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
