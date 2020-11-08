//libraries
import { motion } from "framer-motion";
import {Layout} from "../components/layout/layout"

export default function Home() {
  return (
	<motion.div  
		initial="initial"
		animate="animate"
		exit="exit"
		key="Collection"
		className="Collection" 
	>
	  <Layout.Centered>
	  	<h1>Collection</h1>
	  </Layout.Centered>
    </motion.div>
  )
}
