

import styles from "./layout.module.scss"


interface ILayoutProps {
	children? : React.ReactNode
}


export namespace Layout {
	export function Centered({children}:ILayoutProps){
		return(
			<div className={styles.centered}>
				{children}
			</div>
		)
	}
}

