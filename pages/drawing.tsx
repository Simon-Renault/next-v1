//libraries
import { motion } from "framer-motion";
import {Layout} from "../components/layout/layout"
import Image from 'next/image'

export default function Home() {
  return (
	<motion.div  
		initial="initial"
		animate="animate"
		exit="exit"
		key="Drawing"
		className="Drawing" 
	>
	  <Layout.Centered>
	  	<h1>Drawing</h1>
	  </Layout.Centered>
	  <div className="gallery">
		<Image
			src="https://cdn.shopify.com/s/files/1/0359/0160/3976/products/mock_drawinf_square_2000x2000_crop_center.jpg"
			alt="The drawing illustration"
			unsized
			layout="fill"
			quality={100}
		/>
	  </div>
    </motion.div>
  )
}
