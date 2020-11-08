
//components
import Head from 'next/head'

interface IPageHeadProps {
	title : string,
}


export default function PageHead({title}:IPageHeadProps){
	return(
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
	)
}