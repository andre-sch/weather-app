import { Fragment } from "react"

import "./index.css"

type Props = { errorMessage: string, description: string }

export function ErrorCard({ errorMessage, description }: Props) {
  return (
    <div className="error-card">
      <img src="/assets/other/sad-face.svg" alt="Sorry about that" />
      <div className="error-content">
        <p>{breakTextAtNewline(description)}</p>
        <em>{errorMessage}</em>
      </div>
    </div>
  )

  function breakTextAtNewline(text: string) {
    return text.split('\n').map((line, index) =>
      <Fragment key={index}>
        {line} <br/>
      </Fragment>
    )
  }
}
