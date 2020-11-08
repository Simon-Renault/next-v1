import { motion } from "framer-motion";

export default function Page404(){
	return(
		<motion.div  
			initial="initial"
			animate="animate"
			exit="exit"
			key="P404"
			className="P404" 
		>
			404
		</motion.div  >
	)
}