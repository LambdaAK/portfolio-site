import { motion, useScroll } from "framer-motion";
import "./ProgressBar.css"

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  document.onscroll = () => console.log(scrollYProgress);

  return (
    <motion.div
      className="progress-bar"
      style={
        {
          scaleX: scrollYProgress,
        }
      } />
  )
}