//components
import Link from 'next/link';
import {Layout} from "./layout/layout"
import styles from "./header.module.scss"
import { useViewportScroll } from 'framer-motion';


interface IHeaderLinkProps{

}
function HeaderLink({}:IHeaderLinkProps){
	return(
		<div></div>
	)
}



export default function Header(){


	const {scrollYProgress} = useViewportScroll()

	return(
		<header className={styles.header} >
			<Layout.Centered>
				<div className="logo"></div>
				<div className="nav">
					<Link href="/">
						<a>Home</a>
					</Link>
					<Link href="/collection">
						<a>Collections</a>
					</Link>
					<Link href="/drawing">
						<a>Drawings</a>
					</Link>
				</div>
			</Layout.Centered>
		</header>
	)
}