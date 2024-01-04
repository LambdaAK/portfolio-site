
import { useEffect } from "react"
import "./GitHubLink.css"

export default function GitHubLink(props: { link: string }) {

  return (
    <i className="fa fa-github github-link"
      onClick={
        () => {
          window.open(props.link)
        }
      }
    />
  )
}