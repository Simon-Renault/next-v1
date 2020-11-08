//libraries
import { motion } from "framer-motion";
import {Layout} from "../components/layout/layout"

export default function Home() {
  return (
	<motion.div  
		initial="initial"
		animate="animate"
		exit="exit"
		key="Home"
		className="Home" 
	>
	  <Layout.Centered>
	  	<h1>Home</h1>
	  </Layout.Centered>
    </motion.div>
  )
}
