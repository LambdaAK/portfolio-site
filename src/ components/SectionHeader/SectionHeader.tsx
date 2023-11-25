import { Parallax } from "react-scroll-parallax"
import "./SectionHeader.css"

export default function SectionHeader(
  props: {
    text: string
  }
) {

  return (
    <Parallax scale={[0.5, 1]}>
      <div className="section-header">
        {props.text}
      </div>
    </Parallax>
  )
}