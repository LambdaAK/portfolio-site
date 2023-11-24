import "./SectionHeader.css"

export default function SectionHeader(
  props: {
    text: string
  }
) {
  return (
    <div className="section-header">
      {props.text}
    </div>
  )
}