import { renderToString } from "react-dom/server"
import { ServerApp } from "./App"

export function render(url: string) {
  const html = renderToString(<ServerApp url={url} />)
  return { html }
}

export default render
