import { Parallax } from "react-scroll-parallax"
import "./SectionHeader.css"

export default function SectionHeader(
  props: {
    text: string
  }
) {
  return (
    <Parallax translateX={['-200px', '200px']}>
      <div className="section-header">
        {props.text}
      </div>
    </Parallax>
  )
}